import React, { Fragment } from "react";
import {GiStethoscope} from "react-icons/gi" ; 
import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";

const OrdonnanceToImprime = (props)=>{

    const mydiv = useRef(null) ; 
    
    return(
        <Fragment>
            <div className="myContainerThree">

                <div ref={mydiv}>

                <h5 className="text-dark text-center fw-bold">CLINIQUE DIOP</h5>
                <hr id="mysep"/>
                <div className="row justify-content-between ">
                    <div className="col-4">
                           <p>Dr Moussa Diop</p>
                           <p>Medecin general</p>
                           <p>N° 2366236</p>

                    </div>

                    <div className="col-1 "  style={{fontSize : "60px" , fontWeight : "bold" , marginTop : "-15px" , marginLeft : "-60px"}}><GiStethoscope/></div>   

                    <div className="col-4 ">

                    <p>{props.inf.prenom}</p>
        <p>{props.inf.nom}</p>
        <p>Addresse : {props.inf.addresse} </p>
                        
                    </div>                 

                   
                    
                </div> 

                <h5 className="text-dark text-center fw-bold" style={{marginTop : "10px"}}>Ordonnance</h5>

                <table className="table " style={{marginTop : "30px"}}>
                                 <thead className="bg-secondary ">
                                      <tr>
                                        <th scope="col col-3">Medicament</th>
                                        <th scope="col">Posologie</th>
                                        <th scope="col">nbr d'unite</th>
                                        <th scope="col">Qsp</th>
                                      </tr>
                                  </thead>

                                  <tbody  >
                                    {
                                        props.mytodoOrdonnance.map((todo)=>{
                                            return(
                                                <tr style={{marginBottom : "500px"}} key={todo.id}> 
                                                        

                                                    <td>{todo.medicament}</td>
                                                    <td>{todo.posologie}</td>
                                                    <td>{todo.nbreUnite}</td>
                                                    <td>{todo.qsp}</td>

                                                        
                                                   
                                                   </tr>


                                            )
                                        })
                                    }

                                   

                                 </tbody>
                     </table>

                     <hr id="mysep2" />

                     <div className="text-center">
                        <p className="text-dark">Email : mdiop8862@gmail.com</p>
                        <p className="text-dark">Dakar - Yarakh Hann Montagne </p>

                     </div>

                    
                 




                    <div/>

                    </div>

                    <div className="d-flex justify-content-end" style={{padding : "10px"}}>
                        <button className="btn btn-secondary" onClick={()=>props.myfunc3(false)} >Annuler</button>
                        <ReactToPrint   

                        trigger={()=><button className="btn btn-primary" style={{marginLeft : "10px"}}>Imprimer</button>}

                        content = {()=>mydiv.current}

                        
                        
                        />
                        

                     </div>
               
           
            </div>

            

        </Fragment>
    )
}
export default OrdonnanceToImprime ; 