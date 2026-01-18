import {Route,Routes} from 'react-router-dom';
import WorkerList from "./components/WorkerList";
import { useState,useEffect } from 'react';
import './App.css';
import Header from "./pages/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import PostWorker from "./pages/worker/PostWorker";
import {BrowserRouter} from "react-router-dom"
/* The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [title, setTitle] = useState("Default Value");
 /* useEffect(()=>{fetch("http://localhost:8080/home").then(response=response.text())
              .then(text=>setTitle(text))
			   .catch(error=>console.log("Error Fetching",error))
             },[])*/

  return (
    <> 
	<Header/>
	<Routes>
	<Route path="/workers" element={<WorkerList/>}/>
	<Route path="/postworker" element={<PostWorker/>}/>
	<Route path='/'element={<Dashboard/>}/>
	
	</Routes>
     
  <h1>React After Vite+{title} </h1>
	
      </>
  )
}

export default App;
