import React, { Fragment, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import BilanToImprime from "./BilanToImprime"; 
import { FaSave } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {db} from "./../Firebase/Firebase" ; 
import {getDocs , collection , doc , addDoc, getDoc, setIndexConfiguration} from "firebase/firestore" ; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalBilan = (props)=>{
    
    const [tests , setTest] = useState([])
    const [imprime , setImprime] = useState(false)
    const [search , setSearch] = useState("")
    const params = useParams().id 
    const [idConsultation , setIdConsultation] = useState(null)

    const [infPatient , setInfPatient] = useState({})

    useEffect(()=>{

        getDoc(doc(db , "Patients" , params))

        .then((res)=>
        {
            const dateOne= new Date()
    
            const dateTwo = new Date(res.data().naissance)
    
    
            const  time= Math.abs(dateTwo - dateOne) ; 
    
    
    
             const years =Math.ceil(time / (31536000 * 1000) )
    
            setInfPatient({...res.data() , years})
        })

    },[])














    // elle contiendra la liste des test qui existent dans le domaine medicale

    const [Datas , setData] = useState(["IRM CELEBRALE" , "IRM DU GENOU" , "SCANNER CELEBRALE", "SCANNER CORONAIRE" , "COLOSCOPIE" , "BRONCHOSCOPIE" , "LAPOROSCOPIE" , "MEDIATINOSCOPIE" , "CYSTOCOPIE"  , "ECHOGRAPHIE" , "PONCTION LOMBAIRE" , "BIOPSI"
                                           , "ECBU" , "HYSTEROGRAPHIE" , "FROTTIS" , "SPIROMETRIE" , "EFR"  , "SCINTIGRAPHIE" , "TOMOGRAPHIE" , "AUDIOMETRIE"  , "HOLTER CARDIAQUE" , "PH-METRIE"]) 


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



const HandleSave = ()=>{

    getDocs(collection(db , "Consultation"))

    .then((res)=>{
          res.docs.filter((doc)=> doc.data().date === new Date().toLocaleDateString() && doc.data().idPatient === params).map((doc)=>{
                              
            addDoc(collection(db , "Bilans") , {
                                        
                bilan : [...tests] , 
                 
                idConsultation : doc.id 
            
        
             })
        
             .then((succ)=>{
                console.log(succ)
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
                setTest([])
        
             })
        
             .catch((err)=>{
                console.log(err)
             })
        
           

                               
    })

    })


    .catch((err)=>{

           console.log(err)
    })



    /*


    
     */




}


console.log(idConsultation)


    return(
        <Fragment>

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
             <div className="ContainerModal"  >
                
                <h4 className="text-dark">Bilan</h4>

                <h4 className="text-dark fw-bold" style={{position : "absolute" , top : "0" , left : "92%" , cursor : "pointer"  }} onClick={()=>props.myfunc(false)}><IoMdClose/></h4>
                

                <nav className=" navbar navbar-expand-lg myhnav">

                <ul className="navbar-nav myliste">

                  <li className="nav-item" style={{marginLeft : "15px"}}><button className="btn btn-success" onClick={ShowImprime}  >Aperçu et imprimer</button></li>
                  <li className="nav-item" style={{marginLeft : "15px"}} onClick={HandleSave} ><button className="btn btn-success"  ><span><FaSave/></span> Sauvegarder</button></li>


                </ul>

                </nav>
                
                
                

                <div className="containerOne" style={{padding : "15px"}}>
                  

                   <div className="row " style={{marginTop : "5px"}}>
                      <div className="col-6">
                      <label className="form-label">Prenom</label>
                      <input disabled className="form-control" type={"text"} style={{border : "1px solid black "}} value={infPatient.prenom} />

                      </div>

                      <div className="col-6">
                      <label className="form-label">Nom</label>
                      <input disabled className="form-control" type={"text"} style={{border : "1px solid black "}} value={infPatient.nom} />

                      </div>

                   </div>

                   <div className="row " style={{marginTop : "5px"}}>
                      <div className="col-6">
                      <label className="form-label">Sexe</label>
                      <input disabled className="form-control" type={"text"} style={{border : "1px solid black "}} value={infPatient.sexe} />

                      </div>

                      <div className="col-6">
                      <label className="form-label">Date de naissance</label>
                      <input disabled className="form-control" type={"text"} style={{border : "1px solid black "}} value={new Date(infPatient.naissance).toLocaleDateString("en-US")} />

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
                                .filter((val)=>  val.includes(search))
                                .slice(0 , 7)
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
                                        (imprime === true && (<BilanToImprime myfunc={Close} tests={tests} inf = {infPatient} />))
                                    }


                 
               

                
               


                
          </div>

        </Fragment>
    )
}
export default ModalBilan ; 
