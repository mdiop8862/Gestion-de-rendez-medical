import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import {Routes} from 'react-router-dom'
import { Fragment } from 'react';
import Dashboard from './components/dashboard/dashboard';
import 'remixicon/fonts/remixicon.css'

const App =()=>{
  return(

    <Fragment>

        <Dashboard></Dashboard>
            
    </Fragment>
  )
}

export default App;
