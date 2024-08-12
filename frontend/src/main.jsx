import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {RouterProvider, createBrowserRouter,Route,createRoutesFromElements} from "react-router-dom";
import {About,Project,Services,Skills} from "./components/index.js";
import { Analytics } from '@vercel/analytics/react';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<About/>}/>
      <Route path='project' element={<Project/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='skills' element={<Skills/>}/>
 
      
      </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Analytics />
   
  </React.StrictMode>,
)
