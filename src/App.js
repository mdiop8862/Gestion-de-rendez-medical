import logo from './logo.svg';
import './App.css';
import { Route, useLocation } from 'react-router-dom';
import {Routes} from 'react-router-dom'
import { Fragment } from 'react';
import Dashboard from './components/dashboard/dashboard';
import 'remixicon/fonts/remixicon.css'
import Connection from './Pages/Connection';
const App =()=>{

    const location = useLocation()
      console.log(Location.pathname)
       
      const affiche = location.pathname === "/" ? (<Connection/>) : 
                     
                         (                       <Dashboard> </Dashboard>)
  return(

  

    <Fragment>

         {
          affiche
         }
            
    </Fragment>
  )
}

export default App;
