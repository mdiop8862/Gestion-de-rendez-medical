import React, { Fragment, useEffect } from "react";
import style from  "./AddPatient.css" ; 
import { useState } from "react";
import {db} from "../../src/Firebase/Firebase" ; 
import { collection, addDoc, getDoc , doc, updateDoc } from "firebase/firestore";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPatient = ()=>{

    const datavalu = {nom : "" , prenom : "" , naissance : "" , addresse : "" , telephone : "" , email : "" , sexe : "" }
   

    const [myvalues , setValue]=useState(datavalu)

    const {nom , prenom , naissance , addresse , telephone , email , sexe , age} = myvalues ; 

    const [Feminin , setFeminin] = useState(false)

    const [Masculin , setMasculin] = useState(false) 

    const navigate = useNavigate()
    
    const changeChoose = (choose)=>{

           if(choose === "masculin"){

                  setMasculin( !Masculin)

                  setFeminin(Masculin)

                  setValue({
                    ...myvalues , 
                     sexe  : "Masculin"
                  })
                   
                 

                                      }

           else if (choose === "feminin") {
               setFeminin( !Feminin)

               setMasculin(Feminin)

               setValue({
                ...myvalues , 
                 sexe : "Feminin"
               })

           }

          

    }

    const changeValue =( e)=>{
         setValue( 
            {
                ...myvalues , 
                [e.target.id] : e.target.value
            }

         )

        



    }

    const HandleSubmit = (e)=>{
        e.preventDefault()
        console.log(myvalues)

        // on ajoute le contenu du state dans la base de donnes 

        if(params){
             
            updateDoc(doc(db , "Patients" , params) , {
                nom : myvalues.nom , 
                prenom : myvalues.prenom , 
                naissance : myvalues.naissance , 
                addresse : myvalues.addresse , 
                telephone : myvalues.telephone , 
                email : myvalues.email , 
                sexe : myvalues.sexe 
            })

            .then((res) =>{
                console.log(res)

                setValue({...datavalu})
                setFeminin(false)
                setMasculin(false)

                toast.success('🦄 success!', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    setTimeout(() => {
                        navigate("/ListPatient")
                    }, 2000);
                    
            })

            .catch((err)=>{
                console.log(err)
            })
        }

        else{

            addDoc(collection(db , "Patients") , {
                nom : myvalues.nom , 
                prenom : myvalues.prenom , 
                naissance : myvalues.naissance , 
                addresse : myvalues.addresse , 
                telephone : myvalues.telephone , 
                email : myvalues.email , 
                sexe : myvalues.sexe 
            } )
    
            .then((res)=>{
                console.log(res)
                setValue({...datavalu})
                setFeminin(false)
                setMasculin(false)
                toast.success('🦄 success !', {
                    position: "top-right",
                    autoClose: 2000,
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

        

        

    }

    const HandleReset = ()=>{
        setValue({...datavalu})
    }

    const params = useParams().id

    useEffect(()=>{
        if(params){
            console.log(params)

            getDoc(doc(db , "Patients" , params))

            .then((res)=>{
                setValue(res.data())
            })

            .catch((err)=>{
                console.log(err)
            })
        }
    },[])



    const title= (params) ? (<h4 id="add">Modify Patient</h4>)  : (<h4 id="add">Add Patient</h4>)
    
       
     
    return(

        
          
        <div className="Addpatient">
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
                   {
                    title
                   }   

        <hr/>

        <form className="myForm " style={{marginTop:"80x"}}  onSubmit={HandleSubmit}> 

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

                   <label className="label-control text-light mylabel"  >Date of Birth</label>

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

      <input class="form-check-input" type="radio"  id="sexe"  name="sexe" onChange={()=>changeChoose("masculin")}  value={`$Masculin`} />
      <label class="form-check-label text-light " for="inlineRadio1">Masculin</label>

</div>

<div class="form-check form-check-inline">

     <input class="form-check-input " type="radio"  id="sexe"   name="sexe"  onChange={()=>changeChoose("feminin")} value={`$Feminin`}  />
     <label class="form-check-label text-light" for="inlineRadio2">Feminin</label>

</div>

</div>
                  
                  


            

            

              

            <div className="group d-flex col-2 justify-content-between ">
                
                <button type="submit" class="btn btn-success">Sauvegarder</button>
            

                
                <button type="button" onClick={HandleReset}  class="btn btn-danger">Annuler</button>
            
            
            
            </div>
            


        

        </form>
            
        </div>
    )
}
export default AddPatient ;