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
const ListPatient = () =>{


        const [tableInfo , setTableInfo] = useState ([])

       const navigate = useNavigate()
        
        const MoreInformation = (theId)=>{
            const info =  document.getElementById(`${theId}`)
             info.classList.toggle("seeMoreInfo") 
           
            
           
        }
        

       

        const table = tableInfo.map((liste)=>{
                
          
    
            const dateOne= new Date()
    
            const dateTwo = new Date(liste.naissance)
    
    
            const  time= Math.abs(dateTwo - dateOne) ; 
    
    
    
             const years =Math.ceil(time / (31536000 * 1000) )
    

               return(
                <Fragment>
                <tr style={{cursor : "pointer"}}>    

                <th scope="row" >{liste.nom}</th>

                <td>{liste.prenom}</td>

                <td>{years}</td>

                <td>{liste.telephone}</td>

                <td>{liste.addresse}</td>

                <td><i class="ri-information-line action-info" onClick={()=>MoreInformation(liste.id)} ></i> <i class="ri-file-hwp-line action-modify" onClick={()=>navigate(`/AddPatient/${liste.id}`)}></i> <i class="ri-delete-bin-6-line action-delete" onClick={()=>handleDelete(liste.id)}></i> </td>

                </tr>

                <tr>

                       <td colSpan={8} className="moreinfo " id={`${liste.id}`}>

                        
                        <ul  className="list-group listeinfo list-group-flush">

                            <li className="list-group-item"><span className="listeindex">First & Last Name  : </span> <span className="listevalur">{`${liste.nom } ${liste.prenom}`}</span></li>
                            <li className="list-group-item"><span className="listeindex" >Email  : </span> <span className="listevalur">{`${liste.email }`}</span></li>
                            
                        </ul>

                       </td>

                 </tr>

                

            
           

            </Fragment>

                 
               )
        })


        useEffect(()=>{

            let isRender = true 

            getDocs(collection(db , "Patients"))
            .then((res)=>{
                   res.docs.forEach((doc)=>{

                        
                              isRender === true  &&   setTableInfo((prev)=>[...prev , {...doc.data() , id : doc.id}])

                             

                    
                   })
            })
            .catch((err)=>{
                  console.log(err)
            })

            console.log(tableInfo)
             return ()=> isRender = false
        },[])


          console.log(tableInfo.length)

         const isLoader =
         
         (tableInfo.length === 0 )  ? 


         (
         <div style={{marginTop : "250px" , marginLeft : "-150px"}}>
            <Loader/>
         </div>
         )
  
         :

         
         (
         
         <table class="table bg-side   ">

         <thead className="bg-green">

                   <tr>
                  
                    <th scope="col" className="text-light">Fist Name</th>
                    <th scope="col" className="text-light">Last Name</th>
                    <th scope="col" className="text-light">Age</th>
                    <th scope="col" className="text-light">Telephone</th>
                    <th scope="col" className="text-light">Addresse</th>
                    <th scope="col" className="text-light">Action</th>
                    

                    </tr>
         </thead>


         <tbody>

            {table}
               
        </tbody>

        </table>

        ) 
         
         

        const handleDelete = (id)=>{

            deleteDoc(doc(db , "Patients" , id))
    
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
                    })

            })
    
            .catch((err)=>{
                console.log(err)
            })
        }
         
         
        

    return(

        
        

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
                   <h4 className="Title ">List Patient</h4>

                   <hr/>


                   <div className="TableContainer container">
                        
                        {
                            isLoader
                        }

                         

                   </div>


                 

                   
                        
                 
        </div>
    )
       
}
export default ListPatient ;