import React, { Fragment, useState } from "react";
import style from "./Fiche.css" ; 
import {FaSave} from "react-icons/fa" ; 
import { useRef } from "react";
const Fiche = ()=>{
        const mydiv  = useRef(null)
        const [motif , setmotif]=useState("")
        const showModal = ()=>{
                mydiv.current.classList.toggle("show")
              
        } 

        const recup = (val)=>{
            setmotif(val)
            mydiv.current.style.display = "none"

           }
    return(
        <Fragment>
            <div className=" myContainer">

                <div className="row" style={{marginTop : "-20px"}}>

                    <div className="col-5" >
                         <h3 className="Title_Fiche text-success">General</h3>

                         <form className="MyForme_Fiche " style={{marginTop : "25px"}}>

                               <div className="Myinput_Container ">
                                <div>
                                <label className="form-label MyLabel_Fiche   ">Motif</label>
                                
                                </div>

                                <div>

                                <input type={"text"} className="MyInput_Fiche" value={motif}   onClick={showModal} />

                                <div className="ListAntecedent" ref={mydiv}>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item" onClick={()=>recup("covid")}>Covid</li>
                                            <li className="list-group-item">Covid</li>
                                            <li className="list-group-item">Covid</li>

                                        </ul>
                                </div>

                                </div>
                                  
                                  

                               </div>

                               <div className="Myinput_Container   " style={{marginTop : "20px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Antecedents</label>
                                </div>

                                <div>
                                    <textarea className="MyInput_Fiche" rows={2} style={{color : "#f7230c"}}></textarea>
                                </div>

                               </div>

                               <div className="Myinput_Container " style={{marginTop : "20px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Diagnostique medicale</label>
                                </div>

                                <div>
                                    <textarea className="MyInput_Fiche" rows={2} placeholder="Le diagnostique"></textarea>
                                </div>

                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "20px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Resultats de l'examen clinique </label>
                                </div>

                                <div>
                                    <textarea className="MyInput_Fiche" rows={2} placeholder="Examen clinique"></textarea>
                                </div>

                               </div>

                               <div style={{marginTop : "75px"}}> 
                                    <button className="btn btn-primary "><span><FaSave/></span> Sauvegarder</button>
                                   
                               </div>

                                

                         </form>
                    </div>

                    <div className="col-6">
                        <h3 className="Title_Fiche text-success">Constantes Vitales </h3>

                        <form className="MyForme_Fiche " style={{marginTop : "25px"}} >

                               <div className="Myinput_Container  ">

                               <div>
                                <label className="form-label MyLabel_Fiche">Poids (Kg) </label>
                                </div>

                                <div>

                                <input type={"text"} className="MyInput_Fiche" placeholder="Le poid en kg  " />

                                </div>
                                
                                   
                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "8px"}} >
                               <div>
                                <label className="form-label MyLabel_Fiche">Taille (Cm) </label>
                                </div>

                                <div>

                                <input type={"text"} className="MyInput_Fiche" placeholder="La taille en cm "  />

                                </div>
                                
                                   
                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "8px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">IMC </label>
                                </div>

                                <div>

                                <input type={"text"} className="MyInput_Fiche" disabled  />

                                </div>
                                
                                   
                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "8px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Temperature (°C) </label>
                                </div>

                                <div>

                                <input type={"text"} className="MyInput_Fiche" placeholder="La temperature en degres " />

                                </div>
                                
                                   
                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "8px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Frequence cardiaque</label>
                                </div>

                                <div>

                                <input type={"text"} className="MyInput_Fiche" placeholder=" Ex : 70"  />

                                </div>
                                
                                   
                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "8px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Pression Arterielle </label>
                                </div>

                                <div>

                                <input type={"text"} className="MyInput_Fiche" placeholder="Ex : 8/12"  />

                                </div>
                                
                                   
                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "8px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Observation </label>
                                </div>

                                <div>

                                <textarea className="MyInput_Fiche" rows={2} placeholder="Remarques..." ></textarea>

                                </div>
                                
                                   
                               </div>

                         </form>

                    </div>

                </div>


            </div>


               
        </Fragment>
    )
}

export default Fiche 