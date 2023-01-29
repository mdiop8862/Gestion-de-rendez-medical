import React, { Fragment, useEffect } from "react";
 //import "./ListRv.css"
import { useState } from "react";
//import "./ListePatient.css" ; 
import {db} from "./../Firebase/Firebase" ; 
import { getDoc , getDocs , collection , doc  , deleteDoc} from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ListRv = ()=>{

    const navigate = useNavigate() 

    const MoreInformation = (theId)=>{

        
        const info =  document.getElementById(`${theId}`)

         info.classList.toggle("seeMoreInfo")
       
        
       
    }

    const [tableInfo , setTableInfo] = useState ([])

    useEffect(()=>{

        let isRender = true 

        getDocs(collection(db , "RendezVous"))
        .then((res)=>{

               res.docs.forEach((docu)=>  { 

                        
                getDoc(doc(db , "Patients" , docu.data().idPatient))

                 .then((res2)=>{
                          
                           isRender === true && setTableInfo((prev)=> [...prev , {...docu.data() , ...res2.data()  , id : uuidv4() , idrv : docu.id}])
                 })

                 .catch((err2)=>{
                         console.log(err2)
                 })


                      /*    isRender === true  &&   setTableInfo((prev)=>[...prev , {...doc.data() }]) */
                          
                          

                                            })

          
                                            })

        .catch((err)=>{
              console.log(err)
        })



         return ()=> isRender = false ; 

    },[])



    

        
       

       const table = tableInfo.filter((liste)=>( new Date(liste.date).toLocaleDateString()) === new Date().toLocaleDateString())
       .map((liste)=>{
           return(
            <Fragment>

            <tr key={liste.id}>

                       <th scope="row">{liste.prenom}</th>
                       <td>{liste.nom}</td>
                       <td>{liste.email}</td>
                       <td>{liste.telephone}</td>
                       <td>{liste.date}</td>
                       <td>{liste.heure}</td>
            
                       <td><i class="ri-information-line action-info" onClick={()=>MoreInformation(liste.id)} ></i> <i class="ri-file-hwp-line action-modify"> </i> <i class="ri-delete-bin-6-line action-delete" onClick={()=>handleDelete(liste.idrv)}></i> </td>

             </tr>

             

             <tr>

                  <td colSpan={8} className="moreinfo " id={`${liste.id}`}>
                    
                    <ul  className="list-group listeinfo list-group-flush">
                        <li className="list-group-item"><span className="listeindex">First & Last Name  : </span> <span className="listevalur">{`${liste.prenom} ${liste.nom}`}</span></li>
                        <li className="list-group-item"><span className="listeindex" >Description  : </span> <span className="listevalur">{`${liste.Description }`}</span></li>
                        <li className="list-group-item"><button className="btn btn-success" disabled>Add Patient</button></li>
                       
                        
                    </ul>

                  </td>

             </tr> 

           

            

        
       

        </Fragment>

             
           )
    })         

      

    const handleDelete = (id)=>{

        deleteDoc(doc(db , "RendezVous" , id))

        .then((res)=>{
            console.log(res)
            toast.success('🦄 success!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })

        .catch((err)=>{
            console.log(err)
        })
    }
    

    



    return(

        <div className="listpatient  ">

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
            
        <h4 className="Title ">Liste Rendez Vous</h4>

      <hr/>


        <div className="TableContainer container">
             

              <table class="table bg-side   ">
              <thead className="bg-green">

                        <tr>
                       
                         <th scope="col" className="text-light">Fist Name</th>
                         <th scope="col" className="text-light">Last Name</th>
                         <th scope="col" className="text-light">Email</th>
                         <th scope="col" className="text-light">Telephone</th>
                         <th scope="col" className="text-light">Date</th>
                         <th scope="col" className="text-light">Heure</th>
                         <th scope="col" className="text-light">Action</th>
                         

                         </tr>
              </thead>


              <tbody>

                 {
                     tableInfo.length !==0 && (table)
                   
                 }

                    
             </tbody>

             </table>

        </div>


      

        
             
      
</div>
       
    )
}
export default ListRv ;