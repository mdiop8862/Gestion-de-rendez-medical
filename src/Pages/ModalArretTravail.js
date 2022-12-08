import React, { Fragment, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useRef } from "react";
import ArretToImprime from "./ArretToImprime";
import { FaSave } from "react-icons/fa";

const ModalArretTravail = (props)=>{


    const HandleVerifie = (e)=>{
         console.log(e.target.value)
    }

    const myinput1 = useRef(null)

    const myinput2 = useRef(null)

    const [nombreJours , setNombre]= useState("0")


    const HandleCompte = ()=>{
         
        const d1 = myinput1.current.value ;

        const d2 = myinput2.current.value ; 

        const dateOne= new Date(d1)

        const dateTwo = new Date(d2)


        const  time= Math.abs(dateTwo - dateOne) ; 



         const days =Math.ceil(time / (86400*1000 ))

         setNombre(days) 
        
    }

    const [imprime , setImprime] = useState(false)

    const ShowImprime = ()=>{

        setImprime(true)
                            }


   const Close = (inf)=>{

    setImprime(inf)
                        }


    return(
        <Fragment>

<div className="ContainerModal"  >
                
                <h4 className="text-dark">Arrêt de Travail</h4>

                <h4 className="text-dark fw-bold" style={{position : "absolute" , top : "0" , left : "92%" , cursor : "pointer" }} onClick={()=>props.myfunc(false)} ><IoMdClose/></h4>
                

                <nav className=" navbar navbar-expand-lg myhnav">

                <ul className="navbar-nav myliste">

                  <li className="nav-item" style={{marginLeft : "15px"}}><button className="btn btn-success" onClick={ShowImprime} >Aperçu et imprimer</button></li>
                  <li className="nav-item" style={{marginLeft : "15px"}}><button className="btn btn-success" onClick={()=>ShowImprime(true)  } ><span><FaSave/></span> Sauvegarder</button></li>


                </ul>

                </nav>
                
                
                

                <div className="containerOne" style={{padding : "15px"}}>
                   <label className="form-label">Patient</label>
                   <input className="form-control" style={{border : "1px solid black"}} />

                   <div className="row " style={{marginTop : "5px"}}>
                      <div className="col-6">
                      <label className="form-label">Age</label>
                      <input className="form-control" type={"number"} style={{border : "1px solid black "}} />

                      </div>

                      <div className="col-6">
                      <label className="form-label">Date</label>
                      <input className="form-control" type={"date"} style={{border : "1px solid black "}} />

                      </div>

                   </div>

                </div>

                <div className="containerTwo">

                       <div className="row " id="arret" style={{marginLeft : "14px"}}>

                            <div className="col-4">
                                <span>Du : </span>
                                <input type={"date"} ref={myinput1} className="fw-bold" />

                            </div>

                            <div className="col-4">
                                <span>Au : </span>
                                <input type={"date"} ref={myinput2} onChange={HandleCompte} className="fw-bold" />

                            </div>

                            <div className="col-4">
                                <p>nombre de jours : <span className="fw-bold !important">{nombreJours} jours</span> </p>
                            </div>

                       </div>

                  

                     
                     
                 


                </div>

                
          
                 {
                    (imprime === true) && (<ArretToImprime myfunc={Close}  />)
                 }
               


                
          </div>

               
              
        </Fragment>
    )
}

export default ModalArretTravail ; 