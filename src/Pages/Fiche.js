import React, { Fragment, useEffect, useState } from "react";
import style from "./Fiche.css" ; 
import {FaSave} from "react-icons/fa" ; 
import { useRef } from "react";
import {db} from "../../src/Firebase/Firebase" ; 
import {getDocs , collection , addDoc } from "firebase/firestore" ; 
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Fiche = ()=>{
        const tab = {idPatient : "" ,  motif : "" , antecedents : "" , diagnostique : "" , ResExamenClinique : "", poids : "" , tailles : "" , temperature : "" , frequenceCardiaque : "" , pressionArterielle : "" , observation : ""}
        const [Consultation , setConsultation] = useState({...tab}) 

        const [Interpretation , setInterpretation ] = useState("") ; 

        const [color , setColor] = useState(""); 
        const mydiv  = useRef(null)
        const [motif , setmotif]=useState("")
        const showModal = ()=>{
                mydiv.current.classList.toggle("show")
              
        } 

        const recup = (val)=>{
            setmotif(val)
            mydiv.current.style.display = "none"

           }

        const HandleChange =(e)=>{

               

             setConsultation({
                ...Consultation , 
                [e.target.name] : e.target.value
             })

           }

            const params = useParams().id

            console.log(params)


           const HandleSubmit = (e)=>{

                e.preventDefault() 

                addDoc(collection(db , "Consultation") , {
                    idPatient : params , 
                    date : new Date().toLocaleDateString() , 
                   
                    general : {
                        motif : Consultation.motif , 
                        antecedents : Consultation.antecedents , 
                        diagnostique : Consultation.diagnostique , 
                        ResExamenClinique : Consultation.ResExamenClinique 



                    }

                    ,

                    constantes : {
                         poids : Consultation.poids , 
                         tailles : Consultation.tailles , 
                         temperature : Consultation.temperature , 
                         frequenceCardiaque : Consultation.frequenceCardiaque , 
                         pressionArterielle : Consultation.pressionArterielle , 
                         observation : Consultation.observation 


                    }
                })

                .then((res)=>{
                    
                      setConsultation({...tab})
                      setInterpretation("")
                      setColor("")
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

           const CalculatorImc = ()=>{

               const valueImc = Consultation.poids / ( (Consultation.tailles * 0.01)*(Consultation.tailles * 0.01)  )

               console.log(valueImc)

               if (valueImc === 16.5){

                setColor("#dc3545")
                setInterpretation("Denutrition")

                return  <p style={{color : "white" , lineHeight : "290%"  }}>Denutrition</p>
               }


              else if(valueImc < 18.5 && valueImc > 16.5 ){
                setColor("#dc3545")

                setInterpretation("Etat de maigreur")


              }
                          

              else if(valueImc > 18.5 && valueImc < 25 ) {

                setColor("#198754")

                setInterpretation("Corpulence normale")

              }

               else if(valueImc > 25 && valueImc < 30){
                setColor("#dc3545")

                setInterpretation("Surpoids")

                


               }

              else if(valueImc > 30 && valueImc < 35){
                setColor("#dc3545")

                setInterpretation("Obésité modérée")
                   
              }

              else if(valueImc > 35 && valueImc < 40){
                setColor("#dc3545")

                setInterpretation("Obésité sévère")
                 
              }

             else if(valueImc > 40 && valueImc !== Infinity){

                setColor("#dc3545")

                setInterpretation("Obésité morbide")


             }

             else {
                return  <p style={{color : "white" , lineHeight : "290%"  }}></p>
             }

                        


           }

           useEffect(()=>{
            CalculatorImc()
           })


    return(
        <Fragment>
            <div className=" myContainer">

                <div className="row" style={{marginTop : "-20px"}}>

                    <div className="col-5" >
                         <h3 className="Title_Fiche text-success">General</h3>

                         <form className="MyForme_Fiche " style={{marginTop : "25px"}} onSubmit={HandleSubmit}>

                               <div className="Myinput_Container ">
                                <div>
                                <label className="form-label MyLabel_Fiche   ">Motif</label>
                                
                                </div>

                                <div>

                                <input type={"text"} className="MyInput_Fiche" value={Consultation.motif} name="motif" onChange={HandleChange}   />

    {/*}   <div className="ListAntecedent" ref={mydiv}>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item" onClick={()=>recup("covid")}>Covid</li>
                                            <li className="list-group-item">Covid</li>
                                            <li className="list-group-item">Covid</li>

                                        </ul>
    </div>  {*/}

                                </div>
                                  
                                  

                               </div>

                               <div className="Myinput_Container   " style={{marginTop : "20px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Antecedents</label>
                                </div>

                                <div>
                                    <textarea className="MyInput_Fiche" rows={2} style={{color : "#f7230c"}} name="antecedents" value={Consultation.antecedents} onChange={HandleChange}></textarea>
                                </div>

                               </div>

                               <div className="Myinput_Container " style={{marginTop : "20px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Diagnostique medicale</label>
                                </div>

                                <div>
                                    <textarea className="MyInput_Fiche" rows={2} placeholder="Le diagnostique" value={Consultation.diagnostique} name="diagnostique" onChange={HandleChange}></textarea>
                                </div>

                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "20px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Resultats de l'examen clinique </label>
                                </div>

                                <div>
                                    <textarea className="MyInput_Fiche" rows={2} placeholder="Examen clinique" value={Consultation.ResExamenClinique} name="ResExamenClinique" onChange={HandleChange}></textarea>
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

                                <input type={"number"} className="MyInput_Fiche" placeholder="Le poid en kg" value={Consultation.poids} name="poids" onChange={HandleChange}   />

                                </div>
                                
                                   
                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "8px"}} >
                               <div>
                                <label className="form-label MyLabel_Fiche">Taille (Cm) </label>
                                </div>

                                <div>

                                <input type={"number"} className="MyInput_Fiche" placeholder="La taille en cm " value={Consultation.tailles} name="tailles" onChange={HandleChange} />

                                </div>
                                
                                   
                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "8px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">IMC</label>
                                </div>

                                <div style={{border : "1px solid #b7ffe913" ,  height : "45px" , width : "90%" , lineHeight : "50%" , fontSize : "15px" , backgroundColor : `${color}` } }>
                                                
                                             <p style={{color : "white" , lineHeight : "290%"  , marginLeft : "14px"}}>{Interpretation}</p>
                                      
                                </div>
                                
                                   
                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "8px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Temperature (°C) </label>
                                </div>

                                <div>

                                <input type={"text"} className="MyInput_Fiche" placeholder="La temperature en degres " value={Consultation.temperature} name="temperature" onChange={HandleChange} />

                                </div>
                                
                                   
                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "8px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Frequence cardiaque</label>
                                </div>

                                <div>

                                <input type={"text"} className="MyInput_Fiche" placeholder=" Ex : 70" value={Consultation.frequenceCardiaque} name="frequenceCardiaque" onChange={HandleChange}  />

                                </div>
                                
                                   
                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "8px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Pression Arterielle </label>
                                </div>

                                <div>

                                <input type={"text"} className="MyInput_Fiche" placeholder="Ex : 8/12" value={Consultation.pressionArterielle} name="pressionArterielle" onChange={HandleChange}  />

                                </div>
                                
                                   
                               </div>

                               <div className="Myinput_Container  " style={{marginTop : "8px"}}>
                               <div>
                                <label className="form-label MyLabel_Fiche">Observation </label>
                                </div>

                                <div>

                                <textarea className="MyInput_Fiche" rows={2} placeholder="Remarques..." value={Consultation.observation} name="observation" onChange={HandleChange} ></textarea>

                                </div>
                                
                                   
                               </div>

                         </form>

                    </div>

                </div>


            </div>

            <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

               
        </Fragment>
    )
}

export default Fiche 