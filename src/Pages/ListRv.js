import React, { Fragment } from "react";
 //import "./ListRv.css"
import { useState } from "react";
//import "./ListePatient.css"
const ListRv = ()=>{

    const MoreInformation = (theId)=>{
        const info =  document.getElementById(`${theId}`)

         info.classList.toggle("seeMoreInfo")
       
        
       
    }
    

    const [tableInfo , setTableInfo] = useState (  [
        { id : "12" ,  First : "Moussa" , last : "diop" , email : "mdiop8862@gmail.com" , tel : 766358520 , Daterv : "10/03/2022" , Heure : "13:00" , note : "BLA BLA BLA BL BLA BLA BLA BLA BLA " } , 
        { id : "13" , First : "Moussa" , last : "diop" , email : "mdiop8862@gmail.com" , tel : 766358520 , Daterv : "10/03/2022" , Heure : "13:00" , note : "BLA BLA BLA BLA BLA BLA BLA BLA BLA " } , 
        {id : "14" ,  First : "Moussa" , last : "diop" , email : "mdiop8862@gmail.com" , tel : 766358520 , Daterv : "10/03/2022" , Heure : "13:00" , note : "BLA BLA BLA BL BLA BLA BLA BLA BLA "  } ,
        {id : "15" , First : "Moussa" , last : "diop" , email : "mdiop8862@gmail.com" , tel : 766358520 ,  Daterv : "10/03/2022" , Heure : "13:00" , note : "BLA BLA BLA BL BLA BLA BLA BLA BLA " } , 
        {id : "16" ,  First : "Moussa" , last : "diop" , email : "mdiop8862@gmail.com" , tel : 766358520 , Daterv : "10/03/2022" , Heure : "13:00" , note : "BLA BLA BLA BL BLA BLA BLA BLA BLA " } 
        
       
                       ] )

    const table = tableInfo.map((liste)=>{
           return(
            <Fragment>
            <tr>

            <th scope="row">{liste.First}</th>
            <td>{liste.last}</td>
            <td>{liste.email}</td>
            <td>{liste.tel}</td>
            <td>{liste.Daterv}</td>
            <td>{liste.Heure}</td>
            <td><i class="ri-information-line action-info" onClick={()=>MoreInformation(liste.id)} ></i> <i class="ri-file-hwp-line action-modify"></i> <i class="ri-delete-bin-6-line action-delete"></i> </td>

             </tr>

             <tr>

                  <td colSpan={8} className="moreinfo " id={`${liste.id}`}>
                    
                    <ul  className="list-group listeinfo list-group-flush">
                        <li className="list-group-item"><span className="listeindex">First & Last Name  : </span> <span className="listevalur">{`${liste.First } ${liste.last}`}</span></li>
                        <li className="list-group-item"><span className="listeindex" >Description  : </span> <span className="listevalur">{`${liste.note }`}</span></li>
                        <li className="list-group-item"><button className="btn btn-success" disabled>Add Patient</button></li>
                       
                        
                    </ul>

                  </td>

             </tr>

            

        
       

        </Fragment>

             
           )
    })
    return(

        <div className="listpatient ">
            
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

                 {table}
                    
             </tbody>

             </table>

        </div>


      

        
             
      
</div>
       
    )
}
export default ListRv ;