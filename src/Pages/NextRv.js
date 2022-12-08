import React, { Fragment } from "react";
import style from "./NextRv.css" ;

const NextRv = ()=>{
    return(
        <Fragment>

            <div className="myContainerNext">

               <h4 id="add" className="text-success">Add </h4>

               <hr id="hrmodify"/>

                <form className="myForm " style={{marginTop : "60px"}}>

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


                </form>
            </div>

        
        </Fragment>
    )
}
export default NextRv ; 