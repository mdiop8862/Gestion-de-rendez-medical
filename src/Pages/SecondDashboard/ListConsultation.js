import React, { Fragment, useState } from "react";

const ListConsultation = ()=>{
    
    return(
        <Fragment>
                 <div className="contentContainer">

                                  <div className="ConsultationContainer  " >

                                         <h4 className="text-success fw-bold text-center" style={{marginLeft : "25%" , marginBottom : "30px"}} >Consultation du 10/11/2021</h4>

                                         <div className="row" >
                                             <p className="text-light fw-bold col-2">Motif </p>
                                             <p style={{color : "#808191" , marginLeft : "300px"  }} className="fw-bold col-6">COVID-19</p>
                                         </div>

                                         <div className="row" style={{marginTop : "10px"}}>

                                            <p className="text-light fw-bold col-2">Diagnostic medical</p>  
                                            <p style={{color : "#808191" , marginLeft : "300px" } }  className="fw-bold col-6" >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                                         </div>

                                         <div className="row" style={{marginTop : "10px"}}>

                                            <p className="text-light fw-bold col-2">Examen clinique</p> 
                                            <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                         </div>

                                         <div className="row" style={{marginTop : "10px"}}>
                                            <p className="text-light fw-bold col-2">Poids </p>
                                            <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">19 Kg</p>
                                         </div>

                                         <div className="row" style={{marginTop : "10px"}}>
                                            <p className="text-light fw-bold col-2">Taille</p> 
                                            <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">10 Cm</p>
                                         </div>

                                         <div className="row" style={{marginTop : "10px"}}>
                                            <p className="text-light fw-bold col-2">IMC</p> 
                                            <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6" >22.5</p>
                                         </div>

                                         <div className="row" style={{marginTop : "10px"}}>
                                            <p className="text-light fw-bold col-2">Temperature </p>
                                            <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">39 °C</p>
                                         </div>

                                         <div className="row" style={{marginTop : "10px"}}>
                                            <p className="text-light fw-bold col-2">Frequence cardiaque</p> 
                                            <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">70</p>
                                         </div>

                                         <div className="row" style={{marginTop : "10px"}}>
                                            <p className="text-light fw-bold col-2">Pression arterielle</p> 
                                            <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">10</p>
                                         </div>

                                         <div className="row" style={{marginTop : "10px"}}>
                                            <p className="text-light fw-bold col-2">Observation</p>  
                                            <p style={{color : "#808191" , marginLeft : "300px"}} className="fw-bold col-6">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                         </div>

                                        


                                   </div>

                                   <div className="ConsultationContainer" >

                                                     <h4 className="text-success fw-bold text-center" style={{marginLeft : "25%" , marginBottom : "30px"}} >Ordonnance du 10/11/2021</h4>

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
                              
                         </tr>

                        
                        

 
                           
                               
                        </tbody>

                        </table>

                                   </div>

                                    <div className="ConsultationContainer ">

                                    <h4 className="text-success fw-bold " style={{ marginBottom : "30px" , marginLeft : "-19px"}} >Bilan du 10/11/2021</h4>

                                    <div>

                                        <p style={{color : "#808191" }} className="fw-bold col-6">1. Glycemie</p>
                                        <p style={{color : "#808191" }} className="fw-bold col-6">2. Glycemie</p>
                                        <p style={{color : "#808191" }} className="fw-bold col-6">3. Glycemie</p>
                                        <p style={{color : "#808191" }} className="fw-bold col-6">4. Glycemie</p>
                                        <p style={{color : "#808191" }} className="fw-bold col-6">5. Glycemie</p>
                                        <p style={{color : "#808191" }} className="fw-bold col-6">6. Glycemie</p>
                                        <p style={{color : "#808191" }} className="fw-bold col-6">7. Glycemie</p>
                                        <p style={{color : "#808191" }} className="fw-bold col-6">8. Glycemie</p>
                                        <p style={{color : "#808191" }} className="fw-bold col-6">9. Glycemie</p>
                                        <p style={{color : "#808191" }} className="fw-bold col-6">10. Glycemie</p>
                                        <p style={{color : "#808191" }} className="fw-bold col-6">11. Glycemie</p>

                                    </div>
                                    


                                    </div>

                                    <div className="ConsultationContainer ">

                                    <h4 className="text-success fw-bold " style={{ marginBottom : "30px" , marginLeft : "-19px"}} >Arrêt de Travail du 10/11/2021</h4>

                                    <p style={{color : "#808191" }} className="fw-bold col-6">Arrêt  de travail du <span style={{fontStyle : "italic" ,}} className="text-light"> 14/01/2021 </span> au <span style={{fontStyle : "italic"}} className="text-light">25/01/2021</span> , <span style={{fontStyle : "italic"}} className="text-light">11 jours</span> </p>

                                    

                                    </div>

                 </div>
        </Fragment>
    )
}
export default ListConsultation ;