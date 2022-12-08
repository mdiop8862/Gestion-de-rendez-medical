import React, { Fragment, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "./DossierMedical.css"


const DossierMedical = ()=>{
        const [Consultations , setConsultation] = useState([{thedate : "18/02/2020" , id : "1"} , {thedate : "15/10/2020" , id : "2"} , {thedate : "11/11/2021" , id : "3"}]) 
    return(
        <Fragment>

            <div className="dashboard2 d-flex myContainerDMedical" >

                <nav className="col-2  " id="sidebarTwo" >

                    <ul className="navbar-nav">

                       
                    {
                            Consultations.map((Consultation)=>{
                                return(
                                    <li className="nav-item text-light" style={{marginLeft : "20px" , padding :"20px"}} ><NavLink className={"nav-link mynavlink"} to={`ListConsultation/${Consultation.id}`} 
                                    style ={({isActive})=>{
                                       
                                        return(
                                         {
                                           background:isActive && " #198754" ,
                                           padding : isActive && "5px" , 
                                           color : isActive && "white" , 
                                           fontWeight :isActive && "bold" ,
                                           opacity : isActive && "1" ,
                                           borderRadius:isActive && "5px"
                                         }
                                        )
                             }}>
                                        
                                        Consultation {Consultation.thedate} </NavLink></li>
                                )
                            })
                        }
                       
                    </ul>

                </nav>

                <div className="col-10 content" >
                    <Outlet/>

                </div>



            </div>


             
        </Fragment>
    )
}

export default DossierMedical ; 