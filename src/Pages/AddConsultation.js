import React, { Fragment, useState } from "react";
import "./AddConsultation.css" ; 
import  {useNavigate} from "react-router-dom"

const AddConsultation = ()=>{
    const navigate = useNavigate()
    const tab = [{Name : "Moussa" , Lastname : "Diop" , Age : "30" , email : "mdiop8862@gmail.com"} , {Name : "fallou" , Lastname : "Diop" , Age : "30" , email : "mdiop8862@gmail.com"} ,
    {Name : "abdou" , Lastname : "Diop" , Age : "30" , email : "mdiop8862@gmail.com"} , {Name : "khadime" , Lastname : "Diop" , Age : "30" , email : "mdiop8862@gmail.com"} , 
    {Name : "mouhamed" , Lastname : "Diop" , Age : "30" , email : "mdiop8862@gmail.com"}, {Name : "sokhna" , Lastname : "Diop" , Age : "30" , email : "mdiop8862@gmail.com"} , {Name : "nogaye" , Lastname : "Diop" , Age : "30" , email : "mdiop8862@gmail.com"}
,   {Name : "isamilla" , Lastname : "Diop" , Age : "30" , email : "mdiop8862@gmail.com"}, {Name : "birane" , Lastname : "Diop" , Age : "30" , email : "mdiop8862@gmail.com"}]

    const [Datas , setData] = useState([...tab])

    const [search , setSearch] = useState("")

    const HandleChange = (e)=>{
                setSearch(e.target.value)
    }

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
                            tab.filter((elt)=> elt.Name.includes(search))
                            .map((elt)=>{
                                return(
                                    <li className="list-group-item infopatient" onClick={()=>navigate(`/Info/${elt.Age}/Fiche`)}>{elt.Name} , {elt.Lastname} , Age : {elt.Age}, email : {elt.email}</li>
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