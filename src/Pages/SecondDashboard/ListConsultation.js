import React, { Fragment, useEffect, useState } from "react";
import {db} from "../../Firebase/Firebase" ; 
import {getDoc , doc, getDocs, collection} from "firebase/firestore" ; 
import { useParams } from "react-router-dom";



const ListConsultation = ()=>{

     
     
     const [Consultation , setConsultation] = useState(null)

     const [Ordonnance , setOrdonnance] = useState([])

     const [Bilan , setBilan] = useState([])

     const [Arret , setArret] = useState([])

     const params = useParams().idConsultation


     useEffect(()=>{

      let isRender = true 

// serch consultation 

      getDoc(doc(db , "Consultation" , params ))
      .then((res)=>{
               
            isRender ===true &&   setConsultation(res.data())
             
      })

      .catch((err)=>{
         console.log(err)
      })

// search ordonnance 

       getDocs(collection(db , "ordonnances"))

         .then((res)=>{
            res.docs.filter((doc)=> doc.data().idConsultation === params ).forEach(doc => {
                    isRender === true &&   setOrdonnance((prev)=>[...prev , {...doc.data()}])
            });
         })

         .catch((err)=>{
            console.log(err)
         })

// search bilan 

       getDocs(collection(db , "Bilans"))

         .then((res)=>{
            res.docs.filter((doc)=> doc.data().idConsultation === params ).forEach(doc => {
                    isRender === true &&   setBilan((prev)=>[...prev , {...doc.data()}])
            });
         })

         .catch((err)=>{
            console.log(err)
         })


//search  Arret 

      getDocs(collection(db , "Arrets"))

                 .then((res)=>{

                            res.docs.filter((doc)=> doc.data().idConsultation === params ).forEach(doc => {
                            isRender === true &&   setArret((prev)=>[...prev , {...doc.data()}])

                             });
                            
                     
                     
                            
                                                                                                        })

                   .catch((err)=>{

                                   console.log(err)

                                 })

     



                return ()=> isRender = false ; 

     },[])




           
     console.log(Arret)
     console.log(Ordonnance)
     console.log(Consultation) ;
    
    return(
        <Fragment>


           {Consultation !== null && (
                                         <div className="contentContainer">

                                         <div className="ConsultationContainer  " >
       
                                                <h4 className="text-success fw-bold text-center" style={{marginLeft : "25%" , marginBottom : "30px"}} >Consultation du {Consultation.date} </h4>
       
                                                <div className="row" >
                                                    <p className="text-light fw-bold col-2">Motif </p>
                                                    <p style={{color : "#808191" , marginLeft : "300px"  }} className="fw-bold col-6">{Consultation.general.motif}</p>
                                                </div>
       
                                                <div className="row" style={{marginTop : "10px"}}>
       
                                                   <p className="text-light fw-bold col-2">Diagnostic medical</p>  
                                                   <p style={{color : "#808191" , marginLeft : "300px" } }  className="fw-bold col-6" >{Consultation.general.diagnostique} .</p>
       
                                                </div>
       
                                                <div className="row" style={{marginTop : "10px"}}>
       
                                                   <p className="text-light fw-bold col-2">Examen clinique</p> 
                                                   <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">{Consultation.general.ResExamenClinique}</p>
                                                </div>
       
                                                <div className="row" style={{marginTop : "10px"}}>
                                                   <p className="text-light fw-bold col-2">Poids </p>
                                                   <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">{`${Consultation.constantes.poids} kg`}</p>
                                                </div>
       
                                                <div className="row" style={{marginTop : "10px"}}>
                                                   <p className="text-light fw-bold col-2">Taille</p> 
                                                   <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">{`${Consultation.constantes.tailles} Cm`}</p>
                                                </div>
       
                                           {/*}     <div className="row" style={{marginTop : "10px"}}>
                                                   <p className="text-light fw-bold col-2">IMC</p> 
                                                   <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6" >{Consultation.constantes.poids / ((Consultation.tailles * 0.01)*(Consultation.tailles * 0.01))}</p>
                                                </div>
       
                                            {*/}
       
                                                <div className="row" style={{marginTop : "10px"}}>
                                                   <p className="text-light fw-bold col-2">Temperature </p>
                                                   <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">{`${Consultation.constantes.temperature} °C`}</p>
                                                </div>
       
                                                <div className="row" style={{marginTop : "10px"}}>
                                                   <p className="text-light fw-bold col-2">Frequence cardiaque</p> 
                                                   <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">{`${Consultation.constantes.frequenceCardiaque} `}</p>
                                                </div>
       
                                                <div className="row" style={{marginTop : "10px"}}>
                                                   <p className="text-light fw-bold col-2">Pression arterielle</p> 
                                                   <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">{`${Consultation.constantes.pressionArterielle} `}</p>
                                                </div>
       
                                                <div className="row" style={{marginTop : "10px"}}>
                                                   <p className="text-light fw-bold col-2">Observation</p>  
                                                   <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">{`${Consultation.constantes.observation} `}</p>
                                                </div>
       
                                               
       
       
                                          </div>
       
                                          <div className="ConsultationContainer" >
       
                                                            <h4 className="text-success fw-bold text-center" style={{marginLeft : "25%" , marginBottom : "30px"}} >Ordonnance du {Consultation.date}</h4>
       
                                                            <table class="table bg-side   " style={{width : "90%"}}>
                                <thead className="bg-green">
       
                                          <tr>
                                         
                                           <th scope="col" className="text-light">Medicaments</th>
                                           <th scope="col" className="text-light">Posologie</th>
                                           <th scope="col" className="text-light">Nb unite</th>
                                           <th scope="col" className="text-light">Qsp</th>
                                          
       
                                           </tr>
                                </thead>
       
       
                                <tbody>

                                 {
                                    Ordonnance.map((myord)=>{
                                    return(
                                       myord.ordonnace.map((ord)=>{
                                      
                                          return(
                                             <tr >
                                    
                                             <td className="fw-bold">{ord.medicament}</td>
                                             <td className="fw-bold">{ord.posologie}</td>
                                             <td className="fw-bold">{ord.nbreUnite}</td>
                                             <td className="fw-bold">{ord.qsp}</td>
                                                 
                                            </tr>
                    
                                          )

                                       })

                                    )
                                      
                                    })
                                 }
                              
                        {/*}       <tr >
                                 
                                 <td className="fw-bold">Paracetamole</td>
                                 <td className="fw-bold">comp 3 fois par jour</td>
                                 <td className="fw-bold">1</td>
                                 <td className="fw-bold">1</td>
                                     
                                </tr>
       
                                <tr >
                                 
                                 <td className="fw-bold">Paracetamole</td>
                                 <td className="fw-bold">comp 3 fois par jour</td>
                                 <td className="fw-bold">1</td>
                                 <td className="fw-bold">1</td>
                                     
                                </tr>
       
                                <tr >
                                 
                                 <td className="fw-bold">Paracetamole</td>
                                 <td className="fw-bold">comp 3 fois par jour</td>
                                 <td className="fw-bold">1</td>
                                 <td className="fw-bold">1</td>
                                     
                              </tr>  {*/}
       
                               
                               
       
        
                                  
                                      
                               </tbody>
       
                               </table>
       
                                          </div>
       
                                           <div className="ConsultationContainer ">
       
                                           <h4 className="text-success fw-bold " style={{ marginBottom : "30px" , marginLeft : "-19px"}} > Bilan du {Consultation.date}</h4>
       
                                           <div>

                                             {
                                                Bilan.map((bil)=>{
                                                   return(
                                                      bil.bilan.map((mybil)=>{
                                                           
                                                         return(
                                                            <p style={{color : "#808191" }} className="fw-bold col-6">{`${bil.bilan.findIndex((elt)=>elt === mybil) + 1} ${mybil}`}</p>
                                                         )
                                                      })
                                                   )
                                                  
                                                })
                                             }
       
                                               
                                          {/*}   <p style={{color : "#808191" }} className="fw-bold col-6">2. Glycemie</p>
                                               <p style={{color : "#808191" }} className="fw-bold col-6">3. Glycemie</p>
                                               <p style={{color : "#808191" }} className="fw-bold col-6">4. Glycemie</p>
                                               <p style={{color : "#808191" }} className="fw-bold col-6">5. Glycemie</p>
                                               <p style={{color : "#808191" }} className="fw-bold col-6">6. Glycemie</p>
                                               <p style={{color : "#808191" }} className="fw-bold col-6">7. Glycemie</p>
                                               <p style={{color : "#808191" }} className="fw-bold col-6">8. Glycemie</p>
                                               <p style={{color : "#808191" }} className="fw-bold col-6">9. Glycemie</p>
                                               <p style={{color : "#808191" }} className="fw-bold col-6">10. Glycemie</p>
                                               <p style={{color : "#808191" }} className="fw-bold col-6">11. Glycemie</p>

                                          {*/}
       
                                           </div>
                                           
       
       
                                           </div>
       
                                           <div className="ConsultationContainer ">
       
                                           <h4 className="text-success fw-bold " style={{ marginBottom : "30px" , marginLeft : "-19px"}} >Arrêt du {Consultation.date}</h4>

                                           {
                                             Arret.map((elt)=>{
                                                return(
                                                   <p style={{color : "#808191" }} className="fw-bold col-6">Arrêt  de travail du <span style={{fontStyle : "italic" ,}} className="text-light"> {elt.Arret.debut} </span> au <span style={{fontStyle : "italic"}} className="text-light">{elt.Arret.fin}</span> </p>
                                                )
                                             })
                                           }
       
                                           
       
                                           
       
                                           </div>
       
                        </div>

                                      )}    
        </Fragment>
    )
}
export default ListConsultation ;