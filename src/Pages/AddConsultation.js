import React, { Fragment, useState } from "react";
import "./AddConsultation.css" ; 
import  {useNavigate} from "react-router-dom" ;
import { useEffect } from "react";
import { collection , getDocs} from "firebase/firestore" ; 
import {db} from "../../src/Firebase/Firebase" ; 


const AddConsultation = ()=>{
    const navigate = useNavigate()
   

    const [Datas , setData] = useState([])

    const [search , setSearch] = useState("")

    const HandleChange = (e)=>{
                setSearch(e.target.value)
    }


    useEffect(()=>{

        let isRender = true 

        getDocs(collection(db , "Patients"))
        .then((res)=>{
               res.docs.forEach((doc)=>{

                    
                          isRender === true  &&   setData((prev)=>[...prev , {...doc.data() , id : doc.id}])

                         

                
               })
        })
        .catch((err)=>{
              console.log(err)
        })

         return ()=> isRender = false
    },[])


    return(
        <div className="Addpatient">

            
          
        <h4 id="add">Add </h4>

        <hr/>

        <form className="myForm row justify-content-between col-8" id="anotherform">

            <div className=" form-group col-6">
                <div className="">

                  <label className="label-control text-light labelchoose fw-bold" >Select a patient</label>
                  
                   <input className="form-control inputchoose"  type={"text"} required autoComplete="off" value={search} onChange={HandleChange}   />
                   
                   <div className="sopatient col-5">

                   <ul  className="list-group list-group-flush">

                        {
                            Datas.filter((elt)=> elt.prenom.includes(search))
                            .map((elt)=>{

                                const dateOne= new Date()
    
                                const dateTwo = new Date(elt.naissance)
                        
                        
                                const  time= Math.abs(dateTwo - dateOne) ; 
                        
                        
                        
                                 const years =Math.ceil(time / (31536000 * 1000) )
                        
                                return(
                                    <li className="list-group-item infopatient" onClick={()=>navigate(`/Info/${elt.id}/Fiche`)}>{elt.prenom} , {elt.nom} , Age : {years}, email : {elt.email}</li>
                                )


                            })
                        }

                    
                        
                       
                       
                        
                    </ul>

                     </div>
           
                  

                </div>

               


            </div>

           
              

        <div className="col-2 btnadd"> 

        <button type="button" class="btn btn-success" onClick={()=>navigate("/AddPatient")} >Add Patient</button>

        </div>

        
                

            

                
              
            
            
    
            


        

        </form>
            
        </div>
    )
}
export default AddConsultation ;