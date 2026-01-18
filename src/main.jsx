import React from "react"
import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import WorkerList from "./components/WorkerList";
import PostWorker from "./Pages/worker/PostWorker";


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter>
  <Routes>
  <Route path="*" element={<App/>}/>
   
  </Routes>
  </BrowserRouter> 
   
  </StrictMode>
);
