import React, { Fragment } from "react";
import "./ListePatient.css" ; 
import {BsInfoLg} from "react-icons/bs"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ListPatient = () =>{

       const navigate = useNavigate()
        
        const MoreInformation = (theId)=>{
            const info =  document.getElementById(`${theId}`)

             info.classList.toggle("seeMoreInfo")
           
            
           
        }
        

        const [tableInfo , setTableInfo] = useState (  [
            { id : "12" ,  First : "Moussa" , last : "diop" , age : 21 , tel : 766358520 , addresse : "Dakar" , sexe : "M" , email : "mdiop8862@gmail.com" , Gs :"O+"  } , 
            { id : "13" , First : "Moussa" , last : "diop" , age : 21 , tel : 766358520 , addresse : "Dakar" , sexe : "M" , email : "mdiop8862@gmail.com" , Gs :"O+" } , 
            {id : "14" ,  First : "Moussa" , last : "diop" , age : 21 , tel : 766358520 , addresse : "Dakar" , sexe : "M" , email : "mdiop8862@gmail.com" , Gs :"O+"  } ,
            {id : "15" , First : "Moussa" , last : "diop" , age : 21 , tel : 766358520 , addresse : "Dakar" , sexe : "M" , email : "mdiop8862@gmail.com" , Gs :"O+" } , 
            {id : "16" ,  First : "Moussa" , last : "diop" , age : 21 , tel : 766358520 , addresse : "Dakar" , sexe : "M" , email : "mdiop8862@gmail.com" , Gs :"O+" } 
            
           
                           ] )

        const table = tableInfo.map((liste)=>{
               return(
                <Fragment>
                <tr style={{cursor : "pointer"}}>    

                <th scope="row" onClick={()=>navigate(`/Info/${30}/DossierMedical/ListConsultation/${2}`)}>{liste.First}</th>

                <td>{liste.last}</td>

                <td>{liste.age}</td>

                <td>{liste.tel}</td>

                <td>{liste.addresse}</td>

                <td><i class="ri-information-line action-info" onClick={()=>MoreInformation(liste.id)} ></i> <i class="ri-file-hwp-line action-modify"></i> <i class="ri-delete-bin-6-line action-delete"></i> </td>

                </tr>

                <tr>

                       <td colSpan={8} className="moreinfo " id={`${liste.id}`}>
                        
                        <ul  className="list-group listeinfo list-group-flush">
                            <li className="list-group-item"><span className="listeindex">First & Last Name  : </span> <span className="listevalur">{`${liste.First } ${liste.last}`}</span></li>
                            <li className="list-group-item"><span className="listeindex" >Email  : </span> <span className="listevalur">{`${liste.email }`}</span></li>
                            
                        </ul>

                       </td>

                 </tr>

                

            
           

            </Fragment>

                 
               )
        })
      
    return(

        <div className="listpatient ">
            
                   <h4 className="Title ">List Patient</h4>

                   <hr/>


                   <div className="TableContainer container">
                        

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

                   </div>


                 

                   
                        
                 
        </div>
    )
       
}
export default ListPatient ;