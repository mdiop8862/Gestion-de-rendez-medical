import React, { Fragment, useEffect, useRef, useState } from "react";
import style from "./NextRv.css" ;
import Calendar from "react-calendar" ; 
import "react-calendar/dist/Calendar.css" ; 
import { useParams } from "react-router-dom";
import {db} from "../../src/Firebase/Firebase" ; 
import {FaSave} from "react-icons/fa" ; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { addDoc , collection, getDocs } from "firebase/firestore";

const NextRv = ()=>{

              const [rv , setRv] = useState({ heure : "" , idPatient : "" , Description : "" })

              const [value , setvalue]= useState(new Date()) 


              const HandleChange = (e)=>{
                setRv({
                    ...rv , 
                    [e.target.name] : e.target.value
                })
              }
              
              const params = useParams().id
               
              const HandleSubmit = (e)=>{

                e.preventDefault()

                addDoc(collection(db , "RendezVous" ) , {
                      idPatient : params , 
                      heure : rv.heure , 
                      Description : rv.Description , 
                      date : myref.current.value.toLocaleDateString("en-CA")
                })

                  .then((res)=>{
                      setRv({ heure : "" , idPatient : "" , Description : "" })
                      setvalue(new Date())
                      toast.success('🦄 success!', {
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


            
            const done = new Date() ; 

            const [maxDate , setMaxDate] = useState(done) 
            
          
            
            
              
              

              const myref = useRef(null)

              console.log(new Date())

             
    return(
        <Fragment>

            <div className="myContainerNext">

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

                 <div className="row" style={{marginTop : "120px" , marginLeft : "10px" , height : "500px"}}>

                
                   
                
                 <div className="col-4">
                     <Calendar ref={myref} value={value} onChange={setvalue} minDate={new Date("2022-12-31")}  />

                 </div>

                 <form className="col-6" style={{marginTop : "-1px" , marginLeft : "10px"}} onSubmit={HandleSubmit}>

                      <div>

                          <input type={"time"} className="form-control" name="heure" value={rv.heure} onChange={HandleChange}  />

                      </div>

                      <div style={{marginTop : "71px"}}>


                       <textarea type={"text"} className="form-control" placeholder="Description ...."  name="Description" rows={6} value={rv.Description} onChange={HandleChange} ></textarea>


                      </div>

                      <div style={{marginTop: "130px" }} >
                           <button className="btn btn-success"><FaSave/> Sauvegarder</button>

                         
                           
                           

                      </div>

                 </form>

                 </div>

              

              


          {/*}       <form className="myForm " style={{marginTop : "60px"}}>

                <div className=" row justify-content-between form-group">

                <div className="col-5">
                  
                   <input className="myinput" type={"text"} required autoComplete="off"  id="nom"   />

                   <label className="label-control text-light mylabel" >Last Name</label>

                </div>

                <div className="col-5 right">
                  
                   <input className="myinput" type={"text"} required autoComplete="off" id="prenom"  />

                   <label className="label-control text-light mylabel " >First Name</label>

                </div>


              </div>

              <div className=" row justify-content-between form-group">
                <div className="col-5">
                  
                   <input className="myinput" type={"date"} autoComplete="off" id="naissance"  />

                   <label className="label-control text-light mylabel" >choose a date</label>

                </div>

                <div className="col-5 right">
                  
                   <input className="myinput" type={"time"} required autoComplete="off" id="addresse" />

                   <label className="label-control text-light mylabel" >choose a time</label>

                </div>


            </div>

            <div className=" row justify-content-between form-group">
                <div className="col-5">
                  
                   <input className="myinput" type={"number"} required autoComplete="off" id="telephone"  />

                   <label className="label-control text-light mylabel" >Telephone</label>

                </div>

                <div className="col-5 right">
                  
                   <input className="myinput" type={"email"} required autoComplete="off" id="email"   />

                   <label className="label-control text-light mylabel" >Email</label>

                </div>


            </div>

            <div className=" row justify-content-between form-group">
                <div className="col-5">
                  
                   <input className="myinput" type={"text"} required autoComplete="off" id="telephone"  />

                   <label className="label-control text-light mylabel" >Description</label>

                </div>

               

            </div>

            

          

            

              

            <div className="group d-flex col-2 justify-content-between ">
                
                <button type="button" class="btn btn-primary">Sauvegarder</button>
            

                
                <button type="button" class="btn btn-danger">Annuler</button>
            
            
            
            </div>


    </form>  {*/}

            </div>

        
        </Fragment>
    )
}
export default NextRv ; 