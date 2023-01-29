import React, { Fragment, useEffect } from "react";
import "./ListePatient.css" ; 
import {BsInfoLg} from "react-icons/bs"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {db} from "../../src/Firebase/Firebase" ; 
import { collection , getDocs  , doc , deleteDoc} from "firebase/firestore";
import Loader from "./Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Demande = ()=>{
     
    const [tableInfo , setTableInfo] = useState([])


    const MoreInformation = (theId)=>{
        const info =  document.getElementById(`${theId}`)
         info.classList.toggle("seeMoreInfo") 
       
        
       
    }

    useEffect(()=>{

        let isRender = true 
        getDocs(collection(db , "Demande"))

        .then((res)=>{

            res.forEach((doc)=> {

               console.log()

               isRender === true && setTableInfo((prev)=>[...prev , {...doc.data() , id : doc.id}])


            })

        })

        .catch((err)=>{

        })

        return ()=> isRender = false

    } , [])


    const table = tableInfo.map((liste)=>{
                
           return(


            <Fragment>
            <tr style={{cursor : "pointer"}}>    

            <th scope="row" >{liste.Nom}</th>

            <td>{liste.Prenom}</td>


            <td>{liste.Telephone}</td>

            <td>{liste.Email}</td>

            <td>{liste.Addresse}</td>

            <td>{liste.Naissance}</td>

            <td><i class="ri-check-double-line action-info" onClick={()=>MoreInformation(liste.id)} ></i>     <i class="ri-delete-bin-6-line action-delete" ></i> </td>

            </tr>

            <tr>

                   <td colSpan={8} className="moreinfo " id={`${liste.id}`}>
                      
                      <form style={{border : "1px solid black !important" , width : "80%" }}>

                            <div className="d-flex justify-content-center" style={{marginTop : "10px"}}>

                                <input className="form-control" type={"date"}  style={{width : "30%"}} />

                                <input className="form-control" type={"time"} style={{width : "30%" , marginLeft : "15px"}} />

                                <button className="btn btn-success" style={{marginLeft : "25px"}}>Valider</button>

                            </div>
                           
                      </form>

                    
                   

                   </td>

             </tr>

            

        
       

        </Fragment>

             
           )
    })

















    return(
<Fragment>

<div className="listpatient ">
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>            
                   <h4 className="Title ">Les Demandes</h4>

                   <hr/>


                   <div className="TableContainer container" >


                    <table class="table bg-side   ">

         <thead className="bg-green">

                   <tr>
                  
                    <th scope="col" className="text-light">Nom</th>
                    <th scope="col" className="text-light">Prenom</th>
                    <th scope="col" className="text-light">Telephone</th>
                    <th scope="col" className="text-light">Email</th>
                    <th scope="col" className="text-light">Addresse</th>
                    <th scope="col" className="text-light">Age</th>
                    <th scope="col" className="text-light">Action</th>
                    

                    </tr>
         </thead>


         <tbody>

{
    table
}
           
               
        </tbody>

        </table>
                        
                        
                         

                   </div>


                 

                   
                        
                 
        </div>


        </Fragment>
    )
}

export default Demande ; 