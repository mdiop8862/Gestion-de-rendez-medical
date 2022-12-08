import React, { Fragment } from "react";
import "./SideBar.css"
import {GiStethoscope} from "react-icons/gi"
import {FaStethoscope} from "react-icons/fa"
import 'remixicon/fonts/remixicon.css'
import {IoMdArrowDropdown} from "react-icons/io"
import { useRef } from "react";
import {NavLink}  from "react-router-dom"
import { Link } from "react-router-dom";

import stethoscope from "../../images/stethoscope.png"

const SideBar = ()=>{

  

  const dropdownmenu = useRef(null)
  const dropdownmenu2 = useRef(null)
  const dropdownmenu3 = useRef(null)

  const dropdown =(e)=>{

   dropdownmenu.current.classList.toggle("HideDropdown") 
   e.target.classList.toggle("selectTexte")
   
                     }

  const dropdown2 = (e)=>{

  dropdownmenu2.current.classList.toggle("HideDropdown")
  e.target.classList.toggle("selectTexte")

                       }

  const dropdown3 = (e)=>{

    dropdownmenu3.current.classList.toggle("HideDropdown")
    e.target.classList.toggle("selectTexte")

  }              

    return(
        <nav className="col-2 fixed-top " id="sidebar">

                       < div className="container">

                      


             
                      <h4  style={{marginTop : "5px"}}>

                        <span>
                            <i className="ri-hospital-line ri-sm text-light"></i>   
                        
                        </span>
                         SOS

                      </h4>

                     <div className="Menu ">

                   
                              
                             
                                <ul className="navbar-nav">

                                    
                                   <li className="nav-item">

                                   
                                    
                            <NavLink to={"/"} end  className="nav-link" style ={({isActive})=>{
                                       
                                       return(
                                        {
                                          color: isActive &&  "white" ,
                                          background:isActive && "#b7ffe913" ,
                                          padding: isActive && "6px" ,
                                          borderRadius:isActive && "5px"
                                        }
                                       )
                            }} > 
                                   
                                     <i className="ri-dashboard-line"></i> Dashboard</NavLink>
                                   
                                     </li> 
                                     
                                      <li className="nav-item dropdownn "  > 
                                   
                                      <Link to={"#"} className="nav-link " onClick={dropdown}>

                                        <i className="ri-ghost-smile-line"></i> Patient 
                                        
                                      </Link> 

                                      <ul className="navbar-nav bg-define  " id="DropdownMenu"  ref={dropdownmenu}>

                                        <li className=" nav-item mb-1"> <NavLink to={"ListPatient"} className="nav-link" style={({isActive})=>{
                                                           return(
                                                            {
                                                               color: isActive &&  "white" ,
                                                               background:isActive && "#b7ffe913" ,
                                                               padding: isActive && "6px" ,
                                                               borderRadius:isActive && "5px"
                                                            }
                                                           )
                                        }} >
                                          
                                          <i className="ri-file-list-3-line"></i> List </NavLink></li>
                                        <li className=" nav-item mb-1"><NavLink to={"AddPatient"} className="nav-link"  style={({isActive})=>{
                                                           return(
                                                            {
                                                               color: isActive &&  "white" ,
                                                               background:isActive && "#b7ffe913" ,
                                                               padding: isActive && "6px" ,
                                                               borderRadius:isActive && "5px"
                                                            }
                                                           )
                                        }}>
                                          
                                          <i className="ri-user-add-line"></i> Add </NavLink></li>
                                        
                                        
                                      </ul>  
                                     
                                   
                                   
                                   
                                    </li> 


                                    <li className="nav-item dropdown" > 
                                     <Link to={"#"} className="nav-link" onClick={dropdown3}>

                                                   <i className=" ri-calendar-check-line "></i> Appointement  
                                      </Link>

                                      <ul className="navbar-nav bg-define  " id="DropdownMenu3"  ref={dropdownmenu3}>

                                        <li className=" nav-item "><NavLink to={"ListRv"} className="nav-link" style={({isActive})=>{
                                                           return(
                                                            {
                                                               color: isActive &&  "white" ,
                                                               background:isActive && "#b7ffe913" ,
                                                               padding: isActive && "6px" ,
                                                               borderRadius:isActive && "5px"
                                                            }
                                                           )
                                        }}>
                                          <i className="ri-file-list-3-line"></i> List </NavLink></li>
                                        <li className=" nav-item "><NavLink to={"AddRv"}  className="nav-link"  style={({isActive})=>{
                                                           return(
                                                            {
                                                               color: isActive &&  "white" ,
                                                               background:isActive && "#b7ffe913" ,
                                                               padding: isActive && "6px" ,
                                                               borderRadius:isActive && "5px"
                                                            }
                                                           )
                                        }}>
                                          <i className="ri-add-circle-line"></i> Add </NavLink></li>
                                        
                                        
                                      </ul>  
                                      
                                       </li> 



                                   <li className="nav-item dropdownn "> 
                                   
                                   <NavLink to={"Consultation"} className="nav-link"  style ={({isActive})=>{
                                       
                                       return(
                                        {
                                          color: isActive &&  "white" ,
                                          background:isActive && "#b7ffe913" ,
                                          padding: isActive && "6px" ,
                                          borderRadius:isActive && "5px"
                                        }
                                       )
                            }}>
                                    
                                    <i className="ri-stethoscope-line"></i> Consultation  
                                    
                                    </NavLink> 
                                   
                                   </li> 
                                   <li className="nav-item"> <NavLink to={"Setting"} className="nav-link" style={({isActive})=>{
                                                           return(
                                                            {
                                                               color: isActive &&  "white" ,
                                                               background:isActive && "#b7ffe913" ,
                                                               padding: isActive && "6px" ,
                                                               borderRadius:isActive && "5px"
                                                            }
                                                           )
                                        }}>
                                    <i className="ri-settings-2-line"></i> Setting</NavLink> </li> 

                                    

                                   <li className="nav-item " id="logout"> <NavLink to={"Connection"} className="nav-link" style={({isActive})=>{
                                                           return(
                                                            {
                                                               color: isActive &&  "white" ,
                                                               background:isActive && "#b7ffe913" , 
                                                               padding: isActive && "6px" ,
                                                               borderRadius:isActive && "5px" 
                                                            }
                                                           )
                                        }}>
                                    <i className="ri-logout-circle-line" id="logoutIcone"></i> Logout</NavLink> </li> 

                                 </ul>


                                

                                

                                         
                                 

                            
                     </div>

                     
            

                                      


        </div>
            

        </nav>
    )
}

export default SideBar ;