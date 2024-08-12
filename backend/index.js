import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: '*', // Replace with your frontend domain
    methods: ['GET', 'POST'],
    credentials: true, // If your requests include credentials like cookies
}));
app.use(json());

connect('mongodb+srv://meaviishek:abhi123@cluster0.gsijojy.mongodb.net/viewCounterDB?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// connect('mongodb://localhost:27017/viewCounterDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

const viewSchema = new Schema({
    totalViews: { type: Number, default: 0 },
    uniqueVisitors: { type: Number, default: 0 },
    visitorIds: { type: [String], default: [] },
});

const View = model('View', viewSchema);

app.post('/views', async (req, res) => {
    const { userId } = req.body;

    let views = await View.findOne();
    if (!views) {
        views = new View();
        await views.save();
    }

    views.totalViews += 1;

    // Check if the user is unique
    if (!views.visitorIds.includes(userId)) {
        views.uniqueVisitors += 1;
        views.visitorIds.push(userId);
    }

    await views.save();
    res.json({ totalViews: views.totalViews, uniqueVisitors: views.uniqueVisitors });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
