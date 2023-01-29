import React, { Fragment, useEffect, useState } from "react";
import {db , auth} from "../Firebase/Firebase" ; 
import { onAuthStateChanged } from "firebase/auth";
import { getDoc , doc } from "firebase/firestore";




const Setting = ()=>{
    const [Medecin , setMedecin] = useState({nom : "" , prenom : "" , telephone : "" , addresse : "" , idPro : "" , email : "" , specialite : ""})
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;


        getDoc(doc(db , "Medecin" , user.uid))

        .then((res)=>{
                 console.log(res.data())
                  
                 setMedecin({...res.data()})
        })

        .catch((err)=>{
                console.log(err)
        })
      } else {
        // User is signed out
        // ...
      }
    });
    })

    const HandleChange = (e) => {
     /*   setMedecin({
             ...Medecin , 
              
             [e.target.name] : e.target.value

        }) */
    }
    
    
    return(
        <Fragment>
            <div  className="Container MyContainerInfo1" style={{height : "85vh"}} >

                    <h4 id="add">Profil </h4>

                    <hr/> 

            <form className="form" style={{marginTop : "50px"}} >

                <div className="row" style={{marginLeft : "20px"}}>

                    <div className="myform col-6" id="myfirm">
                        
                        <div>
                            <label className="text-light form-label">Nom</label>
                        </div>

                        <div>

                        <input name="nom" onChange={HandleChange} id="settingInput" value={Medecin.nom} type={"text"} style={{ width : "90%" , height : "38px" , outline : "none" , backgroundColor : "transparent" , borderColor : "white !important" , borderRadius : "8px" }} />

                        </div>  
                       
                   </div>

                   <div className="myform col-6" id="myfirm">
                        
                        <div>
                            <label className="text-light form-label">Prenom</label>
                        </div>

                        <div>

                        <input name= "prenom" onChange={HandleChange} id="settingInput" value={Medecin.prenom} type={"text"} style={{ width : "90%" , height : "38px" , outline : "none" , backgroundColor : "transparent" , borderColor : "white !important" , borderRadius : "8px" }} />

                        </div>  
                       
                   </div>

                

                </div>


                <div className="row" style={{marginLeft : "20px" , marginTop : "30px"}}>

                    <div className="myform col-6" id="myfirm">
                        
                        <div>
                            <label className="text-light form-label">Telephone</label>
                        </div>

                        <div>

                        <input name = "telephone" onChange={HandleChange} id="settingInput" value={Medecin.telephone} type={"text"} style={{ width : "90%" , height : "38px" , outline : "none" , backgroundColor : "transparent" , borderColor : "white !important" , borderRadius : "8px" }} />

                        </div>  
                       
                   </div>

                   <div className="myform col-6" id="myfirm">
                        
                        <div>
                            <label className="text-light form-label">Addresse</label>
                        </div>

                        <div>

                        <input name = "addresse" onChange={HandleChange} value={Medecin.addresse} id="settingInput" type={"text"} style={{ width : "90%" , height : "38px" , outline : "none" , backgroundColor : "transparent" , borderColor : "white !important" , borderRadius : "8px" }} />

                        </div>  
                       
                   </div>

                

                </div>


                <div className="row" style={{marginLeft : "20px" , marginTop : "30px"}}>

                    <div className="myform col-6" id="myfirm">
                        
                        <div>
                            <label className="text-light form-label">Email</label>
                        </div>

                        <div>

                        <input name = "email" onChange={HandleChange} value={Medecin.email} id="settingInput" type={"text"} style={{ width : "90%" , height : "38px" , outline : "none" , backgroundColor : "transparent" , borderColor : "white !important" , borderRadius : "8px" }} />

                        </div>  
                       
                   </div>

                   <div className="myform col-6" id="myfirm">
                        
                        <div>
                            <label className="text-light form-label">Identifiant</label>
                        </div>

                        <div>

                        <input name = "idPro" onChange={HandleChange} value={Medecin.idPro} id="settingInput" type={"text bc-danger"} style={{ width : "90%" , height : "38px" , outline : "none" , backgroundColor : "transparent" , borderColor : "white !important" , borderRadius : "8px" }} />

                        </div>  
                       
                   </div>

                

                </div>



                <div className="row" style={{marginLeft : "20px" , marginTop : "30px"}}>

                    <div className="myform col-6" id="myfirm">
                        
                        <div>
                            <label className="text-light form-label">Specialite</label>
                        </div>

                        <div>

                        <input name = "specialite" onChange={HandleChange} value={Medecin.specialite} id="settingInput" type={"text"} style={{ width : "90%" , height : "38px" , outline : "none" , backgroundColor : "transparent" , borderColor : "white !important" , borderRadius : "8px" }} />

                        </div>  
                       
                   </div>

                   
                 <div class="custom-file col-6" style={{marginTop : "38px"}}>
                               <input onChange={HandleChange} type="file" className="custom-file-input text-light" id="inputGroupFile01"  />
                 </div>

                

                </div>

                <div className="d-flex justify-content-center" style={{ marginLeft : "-35px" , marginTop : "80px"}}>

               
                   <button className=" btn btn-success" style={{ fontSize : "1.2rem" , cursor : "pointer"}} >Edit</button>

                  

                

                </div>



               



                
               


            </form>

                
            </div>
        </Fragment>
    )
}
export default Setting ;