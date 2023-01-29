import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import icone from "../images/icone3.png" ; 
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Firebase/Firebase" ; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import smart from "../images/smart.png" ; 
import undraw2 from "../images/undraw2.svg" ; 
import communaute from "../images/communaute.svg" ; 
import mobile  from "../images/mobile.svg" ; 
import {BiChevronsRight} from "react-icons/bi" ; 
import  profil from  "../images/profil.jpg" ; 
import {db} from "../Firebase/Firebase" ; 
import { getDocs , collection, addDoc } from "firebase/firestore";
import {HiOutlineArrowNarrowLeft} from "react-icons/hi" ; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Connection = ()=>{

    const [Medecin , setMedecin] = useState([])

    useEffect(()=>{
       
    },[])

    const [user , setUser] = useState({email : "" , password : ""})
     const navigate = useNavigate()
    const {email , password} = user ; 

    const [EmailRest , setEmailReset] = useState("") ;

    const [success , setSuccess] = useState("")

    const [color , setColor ] = useState("")

    // send mail to reset 

    const HandleResetPassword = (e)=>{

         e.preventDefault()

        sendPasswordResetEmail(auth, EmailRest)

        .then((res) => {

            setColor("text-success")
            setSuccess( `Consulter votre mail ${EmailRest} pour changer de mot de passe`)

            setTimeout(() => {
                setEmailReset("")
                setSee(true)
                setSuccess("")

                
            }, 7000);
         })

      .catch((error) => {
                const errorCode = error.code;
                 const errorMessage = error.message;
                 console.log(error)
                 setColor("text-danger")
                 setSuccess(`${errorMessage}`)
                 setEmailReset("")
          // ..
  });

 
    }

     // change value  for page to reset


    const HandleChange2 = (e) =>{
        console.log(e.target.value)
        setEmailReset(e.target.value)
    }

    const HandleChange = (e)=>{

        setUser({
            ...user ,

            [e.target.id] : e.target.value
        })
    }

    const HandleSubmit = (e)=>{
          
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          navigate("HomePage")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message)
          toast.warn(`${errorMessage}`, {
            position: "top-right",
            autoClose: 5000 ,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        });
    }

    
    const [SeeConnection , setSee] = useState(true)
   

    const HandleReset = ()=>{
        setSee(false)
    }

    const affiche = (SeeConnection === true)  ?
    
    (
    <div className="col-6" >
                        
    <h1 className="text-light fw-bold text-center">Connexion</h1>



      <form style={{marginTop : "60px"}} onSubmit={HandleSubmit}>

          <div className="container">

          <div className="form-group" >

          <input className="myinput" type={"email"} required autoComplete="off"  id="email" value={email} onChange={HandleChange}  />

          <label className="label-control text-light mylabel" for="email"  >Email</label>

          </div>

          <div className="form-group" style={{marginTop : "80px"}}>

          <input className="myinput" type={"password"} required autoComplete="off"  id="password"  value={password} onChange={HandleChange} />

          <label className="label-control text-light mylabel" for="password"  >Password</label>
          

          </div>

          <div className="text-center  ">

              <button className="btn btn-success " style={{color : "white"}}>Connexion</button>

         </div>

            
               <div className="mydashed"></div>
  
              

               <p className="text-light" style={{marginTop : "40px"}}>Mot de passe oublie ?   <span style={{cursor : "pointer" , color : "#198754"}} onClick={HandleReset} >recuperez le ici</span>  </p>

          

          </div>


</form>
        

</div>
)

: 

(
<div className="col-6" >

    <p className={"text-success"} >{success}</p>
                        
<h1 className="text-light fw-bold text-center">Reset Password</h1>



  <form style={{marginTop : "60px"}} onSubmit={HandleResetPassword}>


      <div className="container">

      <div className="form-group"  style={{marginTop : "100px" }}>

      <input className="myinput" type={"email"} required autoComplete="off"  id="email" value={EmailRest} onChange={HandleChange2}  />

      <label className="label-control text-light mylabel" for="email"  >Email</label>

      </div>

    

      <div className="text-center" style={{marginTop : "100px"}}>

          <button className="btn btn-success " style={{color : "white"}} >Reset</button>
          <button className="btn btn-danger " style={{color : "white" , marginLeft : "10px"}} onClick={()=>setSee(true)}>Back</button>

     </div>


      </div>


  </form>
    

</div> 
)

   


const [connexion , setConnexion] = useState("acceuil")

const ChangePTypeConnection = (thevalue)=>{
        
    if(thevalue === "medecin"){
        setConnexion("medecin")
    }

    else if(thevalue === "patient"){

        setConnexion("patient")
    }


    
}
     

const [search , setSearch] = useState("")

const Change = (e)=>{
          setSearch(e.target.value)
  }

const HandleSubmitSearch = (e)=>{
              
            e.preventDefault()

            getDocs(collection(db , "Medecin"))

            .then((res)=>{
                    res.forEach((doc)=>{
                    console.log(doc.data())
                    setMedecin((prev)=> [prev , {...doc.data() , id : doc.id}]) 
                    
                   })
            })
    
            .catch((err)=>{
                console.log(err)
            })
            
     
}  

const [form , setForm] = useState(false)

const afficheForm = ()=>{
    setForm(true)
}

const [patient , setPatient] = useState({Nom : "" , Prenom : "" , Email : "" , Telephone : "" , Addresse : "" , Naissance : ""})

const ChargeInf = (e)=>{

    setPatient({
        ...patient , 
        [e.target.id] : e.target.value
    })
}

const recupId = (id)=>{
         return(id)
}

const HandleSend = (e)=>{
     e.preventDefault()
     
   const tab =  Medecin.filter((doc)=> doc.specialite === search)

    console.log(tab[0].id)  
    
    addDoc(collection(db , "Demande") , {
        idMedecin : tab[0].id , 
        Nom : patient.Nom , 
        Prenom : patient.Prenom , 
        Email : patient.Email , 
        Telephone : patient.Telephone
    })
    .then((res)=>{

        toast.success("success !!!", {
            position: "top-right",
            autoClose: 2000 ,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })

    })

    .catch((err)=>{

    })
}

const HandleBackOne = ()=>{
    setConnexion("acceuil")
}





const whatAffiche = () => {

         if(connexion === "acceuil"){

            return(
                <Fragment>
                    

                <div className="spot text-center container" style={{marginTop : "5%" , width : "70%"}}>

                    <Carousel  showArrows={false} showStatus={false} showIndicators={false} autoPlay={2500} infiniteLoop={true} >
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>un medecin generaliste</span> </h3>
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>un ophtalmologue</span> </h3>
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>un dentiste</span> </h3>
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>un radiologue</span> </h3>
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>un Ostéopathe</span> </h3>
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>une sage-femme</span> </h3>
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>un psychologue</span> </h3>
                    </Carousel>
              
                                             
              
                                             <p className="text-light" style={{marginTop : "50px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                             Lorem ipsum dolor sit amet. </p>
              
                                             <div className="d-flex justify-content-center" style={{padding : "15px"}}>
              
                                                           <button className="btn btn-success" style={{margin : "10px"}} onClick={()=>ChangePTypeConnection("medecin")}>Medecin</button>
                                                           <button className="btn btn-primary" style={{margin : "10px"}} onClick={()=>ChangePTypeConnection("patient")}>Patient</button>  

                                             </div>
                 </div>
              
              
                                       <div className="container" style={{marginTop : "80px"}}>
                                          <div className="container">

                                                <h3 className="text-center text-light" >SOS : <br/> <span>au service de votre sante</span></h3>
              
                                               <div className="row justify-content-between" style={{marginTop : "50px"}}>
              
                                                         
              
                                                          <div className="col-3 text-center">
                                                              <img src={smart} width="200px" height={"200px"} />
                                                              <p className="" style={{color : "#808191"}}>Accédez rapidement aux <span style={{color : "#198754" }}>disponibilités</span> de tous vos medecin</p>
              
                                                          </div>
              
                                                          <div className="col-3 text-center">
                                                              <img src={communaute} width="200px" height="200px" />
                                                              <p style={{color : "#808191"}}>Une <span style={{color : "#198754"}}>communauté de medecin</span> pour vous accompagner.</p>
              
                                                          </div>
              
                                                          <div className="col-3 text-center">
                                                              <img  src={mobile} width="200px" height="200px"  />
                                                               <p style={{color : "#808191"}}>Gérez vos <span style={{color : "#198754"}}>rendez-vous et  documents</span> de santé ainsi que ceux de vos proches sur une même application</p>
                                                          </div>
              
                                                       </div>
              
                                          </div>
                                                      
                                       </div>
                   </Fragment> 
            )
         }

         else if(connexion === "medecin") {
            return(
                <Fragment>

                <div className="myContainerConnection container " >

                <button className="btn btn-outline-success" style={{ position : "absolute" , top : "10px" , left : "10px" }} onClick={HandleBackOne} > <HiOutlineArrowNarrowLeft/> </button>
                
                <div className="row" style={{marginTop : "100px" , height : "80vh"}}>
                
                 <div className="col-6"  >
                
                          <img src={icone} style={{marginLeft : "-100px"}}  />
                
                 </div>
                
                     {
                        affiche
                     }
                
                 
                
                </div> 
                
                </div> 
                
                
                
                    </Fragment>
                
            ) 
         }

         else if(connexion === "patient"){

            return(
                <Fragment>

                <div className="myContainerConnection container " >

                <button className="btn btn-outline-success" style={{ position : "absolute" , top : "10px" , left : "10px" }} onClick={HandleBackOne} > <HiOutlineArrowNarrowLeft/> </button>
                
                <div className="row" style={{marginTop : "100px" , height : "80vh"}}>

                    

                 <div className="col-6"  >
                
                          <img src={icone} style={{marginLeft : "-100px"}}  />
                
                 </div>

                 <div className="col-6">

                     <Carousel  showArrows={false} showStatus={false} showIndicators={false} autoPlay={2500} infiniteLoop={true} >
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>un medecin generaliste</span> </h3>
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>un ophtalmologue</span> </h3>
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>un dentiste</span> </h3>
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>un radiologue</span> </h3>
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>un Ostéopathe</span> </h3>
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>une sage-femme</span> </h3>
                        <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>un psychologue</span> </h3>
                    </Carousel>

                   
                        
                                 

                                 <form style={{marginTop : "60px"}} onSubmit={HandleSubmitSearch}>

                                 <div class="input-group mb-3">

                                  <input onChange={Change} value={search} style={{color : "#808191"}} type="text" class="form-control" placeholder="renseignez la spécialité du medecin" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                 <button class="btn btn-success"  id="button-addon2">Rechercher <BiChevronsRight/> </button>
                                  </div>
                                 </form>


                                 {
                                     Medecin.filter((doc)=> doc.specialite === search).map((doc)=>{
                                        return(

                                            <Fragment>

                                        <div className="result" width="90%" style={{position : "relative" , marginTop : "30px" , backgroundColor : "#181b3a" , borderRadius : "5px"}}>
                                            <div style={{padding : "15px"}}>
                                                
                                                <div className="col-5 d-flex">
                                                      <img src={profil} width="70px" height ="70px" style={{borderRadius : "100%"}} />
                                                      <p className="text-center" style={{marginLeft : "15px"}}><span className="text-center text-primary">Dr {`${doc.prenom} ${doc.nom}`}</span> <br/> <span className="text-center fw-bold text-center text-light" >{doc.specialite}</span></p>
                                                      
                                                </div>
        
                                                <div className="col-4"  style={{marginLeft : "65px" }}>
        
                                                     <p className="text-light text-center"><span className="text-center">{doc.email}</span><br/> <span className="text-center">+221 {doc.telephone}</span> </p>
        
                                                </div>
        
                                                <button className="btn btn-success" style={{position : "absolute" , top : "35%" , left : "55%"}} onClick={afficheForm}>Demander Un Rendez Vous </button>
        
        
        
                                            </div>
        
                                         </div>

                                         {
                                            form === true && 
                                            
                                            ( 
                                            
                                            <form style={{marginTop : "40px" , marginBottom : "50px"}} onSubmit={HandleSend}>

                                            <legend className="text-light"><h3 >Demander Un Rendez-Vous</h3></legend>
     
                                            <fieldset>
     
                                            <div className="groups mb-3 ">
                                                <label className="form-label text-light">Nom</label>
                                                 <input className="form-control" type={"text"} value={patient.Nom} onChange={ChargeInf} id="Nom"  />
                                            </div>
                                            <div className="groups mb-3">
                                                <label className="form-label text-light">Prenom</label>
                                                 <input className="form-control" type={"text"} value={patient.Prenom} onChange={ChargeInf} id="Prenom"  />
                                            </div>
                                            <div className="groups mb-3">
                                                <label className="form-label text-light">Email</label>
                                                 <input className="form-control" type={"email"} value={patient.Email} onChange={ChargeInf} id="Email"   />
                                            </div>
                                            <div className="groups mb-3 ">
                                                <label className="form-label text-light">Telephone</label>
                                                 <input className="form-control" type={"text"} value={patient.Telephone} onChange={ChargeInf} id="Telephone"  />
                                            </div>

                                            <div className="groups mb-3 ">
                                                <label className="form-label text-light">Addresse</label>
                                                 <input className="form-control" type={"text"} value={patient.Addresse} onChange={ChargeInf} id="Addresse"  />
                                            </div>

                                            <div className="groups mb-3 ">
                                                <label className="form-label text-light">Naissance</label>
                                                 <input className="form-control" type={"text"} value={patient.Naissance} onChange={ChargeInf} id="Naissance"  />
                                            </div>

                                            <div className="d-flex justify-content-center" >
                                            <button   className="btn btn-outline-success " >Send </button>
                                            </div>
     
                                           
     
     
                                            </fieldset>
     
                                            
                                         
     
                                      </form>)
                                         }


                                         


                                         

                                            </Fragment>

                                            

                                        )
                                     })
                                    
                                 }

                                
                                


                 </div>
                
                       
                
                 
                
                </div> 
                
                </div> 
                
                
                
                    </Fragment>
            )
         }

} 

     
    return(
        <Fragment>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"


/>      
  
      <header> 
        <h1 className="text-light fw-bold text-center">Save Our Souls</h1>

      </header>

     
     {
        whatAffiche()
     }























  {/*}
  
  <header> 
  <h1 className="text-light fw-bold text-center">Save Our Souls</h1>

  </header>

  <div className="spot text-center container" style={{marginTop : "5%" , width : "70%"}}>

                               <h3 className="text-light fw-bold">Trouver un rendez-vous avec <span className="mySpecialite" style={{color : "#198754"}}>Radiologie</span> </h3>

                               <p className="text-light" style={{marginTop : "50px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                               Lorem ipsum dolor sit amet. </p>

                               <di className="d-flex justify-content-center" style={{padding : "15px"}}>

                                             <button className="btn btn-success" style={{margin : "10px"}}>Medecin</button>
                                             <button className="btn btn-primary" style={{margin : "10px"}}>Patient</button> 
                               </di>
                         </div>


                         <div className="container" style={{marginTop : "80px"}}>
                            <div className="container">

                                 <div className="row justify-content-between">

                                           

                                            <div className="col-3 text-center">
                                                <img src={smart} width="200px" height={"200px"} />
                                                <p className="" style={{color : "#808191"}}>Accédez rapidement aux <span style={{color : "#198754" }}>disponibilités</span> de tous vos medecin</p>

                                            </div>

                                            <div className="col-3 text-center">
                                                <img src={communaute} width="200px" height="200px" />
                                                <p style={{color : "#808191"}}>Une <span style={{color : "#198754"}}>communauté de medecin</span> pour vous accompagner.</p>

                                            </div>

                                            <div className="col-3 text-center">
                                                <img  src={mobile} width="200px" height="200px"  />
                                                 <p style={{color : "#808191"}}>Gérez vos <span style={{color : "#198754"}}>rendez-vous et  documents</span> de santé ainsi que ceux de vos proches sur une même application</p>
                                            </div>

                                         </div>

                            </div>
                                        
                         </div>

    {*/}

  

    {/*}
    
    <div className="myContainerConnection container " >
               <div className="row" style={{marginTop : "100px" , height : "80vh"}}>

                <div className="col-6"  >

                         <img src={icone} style={{marginLeft : "-100px"}}  />

                </div>

                {
                    affiche
                }

                

               </div> 
               
    </div> 

     {*/} 
        </Fragment>
    )
}
export default Connection ;