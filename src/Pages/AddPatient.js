import React, { Fragment } from "react";
import style from  "./AddPatient.css" ; 
import { useState } from "react";

const AddPatient = ()=>{

    const datavalu = {nom : "" , prenom : "" , naissance : "" , addresse : "" , telephone : "" , email : "" , sexe : "" }
   

    const [myvalues , setValue]=useState(datavalu)

    const {nom , prenom , naissance , addresse , telephone , email , sexe } = myvalues ; 

    const [Feminin , setFeminin] = useState(false)

    const [Masculin , setMasculin] = useState(false) 
    
    const changeChoose = (choose)=>{

           if(choose === "masculin"){

                  setMasculin( !Masculin)

                  setFeminin(Masculin)
                   
                 

                                      }

           else if (choose === "feminin") {
               setFeminin( !Feminin)

               setMasculin(Feminin)

           }

          

    }

    const changeValue =( e)=>{
         setValue( 
            {
                ...myvalues , 
                [e.target.id] : e.target.value
            }

         )

        



         console.log(myvalues)
    }

    
       
     
    return(

        
          
        <div className="Addpatient">
          
                     <h4 id="add">Add Patient</h4>

        <hr/>

        <form className="myForm ">

            <div className=" row justify-content-between form-group">
                <div className="col-5">
                  
                   <input className="myinput" type={"text"} required autoComplete="off"  id="nom"  onChange={changeValue} value={`${nom}`} />

                   <label className="label-control text-light mylabel" >Last Name</label>

                </div>

                <div className="col-5 right">
                  
                   <input className="myinput" type={"text"} required autoComplete="off" id="prenom" onChange={changeValue} value={`${prenom}`}  />

                   <label className="label-control text-light mylabel " >First Name</label>

                </div>


            </div>

            <div className=" row justify-content-between form-group">
                <div className="col-5">
                  
                   <input className="myinput" type={"date"} autoComplete="off" id="naissance" onChange={changeValue} value={`${naissance}`} />

                   <label className="label-control text-light mylabel" >Date of Birth</label>

                </div>

                <div className="col-5 right">
                  
                   <input className="myinput" type={"text"} required autoComplete="off" id="addresse" onChange={changeValue} value={`${addresse}`} />

                   <label className="label-control text-light mylabel" >Address</label>

                </div>


            </div>

            <div className=" row justify-content-between form-group">
                <div className="col-5">
                  
                   <input className="myinput" type={"number"} required autoComplete="off" id="telephone" onChange={changeValue} value={`${telephone}`}  />

                   <label className="label-control text-light mylabel" >Telephone</label>

                </div>

                <div className="col-5 right">
                  
                   <input className="myinput" type={"email"} required autoComplete="off" id="email" onChange={changeValue} value={`${email}`}  />

                   <label className="label-control text-light mylabel" >Email</label>

                </div>


            </div>

            <label className="label-control text-light">Sexe</label>

            <div className="mb-2">

            <div class="form-check form-check-inline">

                  <input class="form-check-input" type="radio"  id="sexe"  name="sexe" onChange={()=>changeChoose("masculin")}  value={`$Masculin`}  />
                  <label class="form-check-label text-light " for="inlineRadio1">Masculin</label>

            </div>

            <div class="form-check form-check-inline">

                 <input class="form-check-input " type="radio"  id="sexe"   name="sexe"  onChange={()=>changeChoose("feminin")} value={`$Feminin`} />
                 <label class="form-check-label text-light" for="inlineRadio2">Feminin</label>

            </div>

            </div>

            

              

            <div className="group d-flex col-2 justify-content-between ">
                
                <button type="button" class="btn btn-success">Sauvegarder</button>
            

                
                <button type="button" class="btn btn-danger">Annuler</button>
            
            
            
            </div>
            


        

        </form>
            
        </div>
    )
}
export default AddPatient ;