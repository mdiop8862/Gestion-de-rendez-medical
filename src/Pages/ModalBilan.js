import React, { Fragment, useState } from "react";
import { IoMdClose } from "react-icons/io";
import BilanToImprime from "./BilanToImprime"; 
import { FaSave } from "react-icons/fa";

const ModalBilan = (props)=>{
    
    const [tests , setTest] = useState([])
    const [imprime , setImprime] = useState(false)
    const [search , setSearch] = useState("")
    // elle contiendra la liste des test qui existent dans le domaine medicale
    const [Datas , setData] = useState(["Bilan1" , "moussa2"  , "abdou3"  , "fallou" , "demba"  , "ismailla"  , "Birane" , "khadime"  , "aladji"  , "koura"  , "nogaye"  , "ndiaye"  , "fatou" ]) 


      const AddTest = (test)=>{
        
        setTest([...tests , test])

      }

      const ShowImprime = ()=>{
        setImprime(true)
}


const Close = (inf)=>{
    setImprime(inf)
}

const HandleChange = (e) =>{
    setSearch(e.target.value) 
}


    return(
        <Fragment>
             <div className="ContainerModal"  >
                
                <h4 className="text-dark">Bilan</h4>

                <h4 className="text-dark fw-bold" style={{position : "absolute" , top : "0" , left : "92%" , cursor : "pointer"  }} onClick={()=>props.myfunc(false)}><IoMdClose/></h4>
                

                <nav className=" navbar navbar-expand-lg myhnav">

                <ul className="navbar-nav myliste">

                  <li className="nav-item" style={{marginLeft : "15px"}}><button className="btn btn-success" onClick={ShowImprime}  >Aperçu et imprimer</button></li>
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

                <div className="containerTwo" >

                    <div className="row">
                        <div className="col-6">
                            
                        <input className="form-control " type={"filtrer par nom de test"} style={{marginLeft : "10px "  , border : "1px solid black"}}   placeholder="filtrer par nom de test " name="search" value={search} onChange={HandleChange} />
                        <div className="allTest " style={{marginLeft : "10px"  , marginTop : "8px"}}>

                            {
                                Datas
                                .slice(0 , 7)
                                .filter((val)=>  val.includes(search))
                                .map((val)=>{
                                    return(
                                        <p onClick={()=>AddTest(val)} style={{cursor : "pointer"}} >{val}</p>
                                    )
                                })
                            }

                            
                          

                        </div>

                        </div>

                        <div className="col-6" >
                            <p className="fw-bold test-dark">La liste des tests a effectuer </p>

                            {
                                (tests.length === 0) && (<p className="text-success">Cliquez sur un test pour l'ajouter dans la liste a gauche pour l'ajouter</p>)
                            }
                            
                            {
                                tests.map((test)=>{
                                    return(
                                        <p>{`${tests.findIndex(Element => Element === test)+1}. ${test}`}</p>
                                    )
                                    
                                })
                            }

                        </div>

                    </div>

                 

                 
                                          
                                              
                                             

                
              
                     
                     
                 

                   

                    

                 


                </div>

                                    {
                                        (imprime === true && (<BilanToImprime myfunc={Close} tests={tests} />))
                                    }


                 
               

                
               


                
          </div>

        </Fragment>
    )
}
export default ModalBilan ; 
