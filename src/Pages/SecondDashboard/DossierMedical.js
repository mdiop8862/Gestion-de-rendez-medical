import React, { Fragment, useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import style from "./DossierMedical.css" ; 
import {db}  from "../../Firebase/Firebase" ; 
import { getDoc, collection , doc , getDocs} from "firebase/firestore";
import Loader from "../Loader"; 

const DossierMedical = ()=>{
        const [Consultations , setConsultation] = useState([]) 
        
         const params = useParams().id
         console.log(params)

         useEffect(()=>{

            let isRender = true 

        getDocs(collection(db , "Consultation" ))
        .then((res)=>{
                    res.docs.filter((doc) => doc.data().idPatient === params).forEach((doc)=>{
                        
                                (isRender) && setConsultation((prev)=> [...prev , {...doc.data() , idConsultation : doc.id}])
                    })
        })
 
        .catch((err)=>{
            console.log(err)
        })

                        

                          return ()=> isRender = false
              
         },[])


         console.log(Consultations)

         const isLoader = (Consultations.length ===0 ) ? 
         
         (
         <div style={{marginTop : "250px" , marginLeft : "-40px"}}>
         <Loader/>
         </div>
         )

         :

         (<Outlet/>)

    return(
        <Fragment>

            <div className="dashboard2 d-flex myContainerDMedical" >

                <nav className="col-2  " id="sidebarTwo" >

                    <ul className="navbar-nav">

                       
                    {
                          Consultations.map((Consultation)=>{
                                return(
                                    <li className="nav-item text-light" style={{marginLeft : "20px" , padding :"20px"}} ><NavLink className={"nav-link mynavlink"} to={`ListConsultation/${Consultation.idConsultation}`} 
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
                                        
                                        Consultation {Consultation.date} </NavLink></li>
                                )
                            }) 
                        }
                       
                    </ul>

                </nav>

                <div className="col-10 content" >

                    {
                        isLoader
                    }

                </div>



            </div>


             
        </Fragment>
    )
}

export default DossierMedical ; 