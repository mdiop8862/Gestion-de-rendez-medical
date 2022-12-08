import React, { Fragment, useState } from "react";
import style from "./OrdonnanceModal.css" ; 
import {IoMdAdd} from "react-icons/io" ; 
import {AiFillDelete} from "react-icons/ai" ; 
import {IoMdClose} from "react-icons/io" ; 
import {IoMdAddCircleOutline} from "react-icons/io" ; 
import OrdonnanceToImprime from "./OrdonnanceToImprime";
import { v4 as uuidv4 } from 'uuid';
import { useRef } from "react";
import { FaSave } from "react-icons/fa";
const OrdonnanceModal = (props)=>{
    const mydiv = useRef(null)
   
     const data = {medicament : "" , posologie : "" , nbreUnite : "" , qsp : "" , id : uuidv4()}
    const [myvalue , setvalue] = useState({...data})

    const [mytodo , setMytodo] = useState([])

    const HandleChange = (e)=>{
          
        setvalue({...myvalue , [e.target.name] : e.target.value })
    }

    const HandleSubmit = (e)=>{

        e.preventDefault() ;
        setMytodo([...mytodo , myvalue ])
        setvalue({...data})
       


        

    }

    const HandleDelete = (id)=>{

        setMytodo(mytodo.filter((todo)=> todo.id !== id))
        
        


    }
  
    const [Imprime , setImprime] = useState(false)

    const ShowImprime = (inf)=>{
            setImprime(inf)
    }

    const ifClose2 = (inf)=>{

     if(inf===false){
        setImprime(false)
          
     }

    }
    
    
    
    return(
        
        <Fragment>
            

            
            
            <div className="ContainerModal"  >
                
                  <h4 className="text-dark">Ordonnance</h4>

                  <h4 className="text-dark fw-bold" style={{position : "absolute" , top : "0" , left : "92%" , cursor : "pointer" }} onClick={()=>props.myfunc(false)}><IoMdClose/></h4>
                  

                  <nav className=" navbar navbar-expand-lg myhnav">

                  <ul className="navbar-nav myliste">

                    <li className="nav-item" style={{marginLeft : "15px"}}><button className="btn btn-success" onClick={()=>ShowImprime(true)  } >Aperçu et imprimer</button></li>
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

                    <form className="row" style={{marginLeft : "10px"}} onSubmit={HandleSubmit}>

                    <input className="form-control " type={"text"}   style={{width : "250px" , border : "none" , outline : "none" , border : "1px solid black"  }} value={myvalue.medicament} onChange={HandleChange} placeholder="Medicament" name="medicament" />
                    <input className="form-control" type={"text"}   style={{width : "250px" , border : "none" , outline : "none" , border : "1px solid black" , marginLeft : "8px"}} value={myvalue.posologie} onChange={HandleChange} placeholder="Posologie" name="posologie" />
                    <input className="form-control" type={"number"} style={{width : "100px" , border : "none" , outline : "none" , border : "1px solid black" , marginLeft : "8px"}} value={myvalue.nbreUnite} onChange={HandleChange} placeholder="unite" name="nbreUnite" />
                    <input className="form-control" type={"number"} style={{width : "100px" , border : "none" , outline : "none" , border : "1px solid black" , marginLeft : "8px"}} value={myvalue.qsp} onChange={HandleChange} placeholder="qst" name="qsp" />
                    <button className="btn btn-primary col-1" style={{marginLeft : "2%"}}>Add</button>
                     

                    </form>

                    <table class="table">
                                 <thead>
                                      <tr>
                                        <th scope="col col-3">Medicament</th>
                                        <th scope="col">Posologie</th>
                                        <th scope="col">nbr d'unite</th>
                                        <th scope="col">Qsp</th>
                                        <th scope="col col-1">Action</th>
                                      </tr>
                                  </thead>

                                  <tbody >

                                    {
                                        mytodo.map((todo)=>{
                                            return(
                                                <tr key={todo.id} > 
                                                        

                                                    <td>{todo.medicament}</td>
                                                    <td>{todo.posologie}</td>
                                                    <td>{todo.nbreUnite}</td>
                                                    <td>{todo.qsp}</td>
                                                    <td><i class="ri-delete-bin-6-line action-delete"   style={{fontSize : "18px"}} onClick={()=>HandleDelete(todo.id)} ></i> </td>

                                                        
                                                   
                                                </tr>


                                            )
                                        })
                                    }
                                         
                                            
                                                
                                               

                                 </tbody>
                     </table>

                       
                       
                   

                     

                      

                   


                  </div>

                     {
                        (Imprime === true) && ( <OrdonnanceToImprime myfunc3={ifClose2} mytodoOrdonnance={mytodo}  /> )
                     }

                  
                 


                  
            </div>



        </Fragment>
    )
}

export default OrdonnanceModal ; 