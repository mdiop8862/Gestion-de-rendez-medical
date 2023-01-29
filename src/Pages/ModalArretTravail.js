import React, { Fragment, useState , useEffect} from "react";
import { IoMdClose } from "react-icons/io";
import { useRef } from "react";
import ArretToImprime from "./ArretToImprime";
import { FaSave } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {db} from "./../Firebase/Firebase" ; 
import {getDocs , getDoc , collection , doc , addDoc} from "firebase/firestore" ; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModalArretTravail = (props)=>{

     const [date , setDate] = useState({DateDebut : "" , DateFin : ""})

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

    const params = useParams().id
    const HandleSave = ()=>{

        getDocs(collection(db , "Consultation")) 


        .then((res)=>{
              res.docs.filter((doc)=> doc.data().date === new Date().toLocaleDateString() && doc.data().idPatient === params).map((doc)=>{
                                
              addDoc(collection(db , "Arrets") , {
                                          
                  Arret : { debut : myinput1.current.value , fin : myinput2.current.value } , 

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
                  
          
               })
          
               .catch((err)=>{
                  console.log(err)
               })
          
             
                     
                                 
      })
  
      })
  
  
      .catch((err)=>{
  
             console.log(err)
      })


        



    }


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
                
                <h4 className="text-dark">Arrêt de Travail</h4>

                <h4 className="text-dark fw-bold" style={{position : "absolute" , top : "0" , left : "92%" , cursor : "pointer" }} onClick={()=>props.myfunc(false)} ><IoMdClose/></h4>
                

                <nav className=" navbar navbar-expand-lg myhnav">

                <ul className="navbar-nav myliste">

                  <li className="nav-item" style={{marginLeft : "15px"}}><button className="btn btn-success" onClick={ShowImprime} >Aperçu et imprimer</button></li>
                  <li className="nav-item" style={{marginLeft : "15px"}} onClick={HandleSave}><button className="btn btn-success" ><span><FaSave/></span> Sauvegarder</button></li>


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

                <div className="containerTwo">

                       <div className="row " id="arret" style={{marginLeft : "14px"}}>

                            <div className="col-4">
                                <span>Du : </span>
                                <input type={"date"} ref={myinput1} className="fw-bold"   />

                            </div>

                            <div className="col-4">
                                <span>Au : </span>
                                <input type={"date"} ref={myinput2} onChange={HandleCompte} className="fw-bold"  />

                            </div>

                            <div className="col-4">
                                <p>nombre de jours : <span className="fw-bold !important">{nombreJours} jours</span> </p>
                            </div>

                       </div>

                  

                     
                     
                 


                </div>

                
          
                 {
                    (imprime === true) && (<ArretToImprime myfunc={Close} inf = {infPatient}  />)
                 }
               


                
          </div>

               
              
        </Fragment>
    )
}

export default ModalArretTravail ; 