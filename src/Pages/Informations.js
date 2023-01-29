import React, { Fragment, useEffect, useState } from "react";
import style from "./Informations.css" ;
import {db} from "../../src/Firebase/Firebase" ;
import { getDoc , doc , collection  } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const  Informations = ()=>{

           const [inf , setInf] = useState(null)

           const params = useParams().id
           useEffect(()=>{
                getDoc(doc(db , "Patients" , params))
                .then((res)=>{
                    setInf(res.data())
                })

                .catch((err)=>{
                       console.log(err)
                })
           })

           const isLoader = (inf === null) ? 

           (

           <div style={{marginTop : "200px" , marginLeft : "-200px"}}>

            <Loader/>

           </div>
           
            )

            :

            (
                  <Fragment>

<div className="row" style={{marginLeft : "10px" , marginTop : "70px"}}>

<p className="col-5" style={{color : "#fff"}}>Nom & Prenom</p>
<p className="col-auto" style={{color : "#808191"}}>{`${inf.prenom} ${inf.nom}`}</p>

</div>

<div className="row" style={{marginLeft : "10px" , marginTop : "50px"}}>

<p className="col-5" style={{color : "#fff"}}>Date De Naissance</p>
<p className="col-auto" style={{color : "#808191"}}>{inf.naissance}</p>

</div>

<div className="row" style={{marginLeft : "10px" , marginTop : "50px"}}>

<p className="col-5" style={{color : "#fff"}}>Addresse</p>
<p className="col-auto" style={{color : "#808191"}}>{inf.addresse}</p>

</div>

<div className="row" style={{marginLeft : "10px" , marginTop : "50px"}}>

<p className="col-5" style={{color : "#fff"}}>Telephone</p>
<p className="col-auto" style={{color : "#808191"}}>{inf.telephone}</p>

</div>

<div className="row" style={{marginLeft : "10px" , marginTop : "50px"}}>

<p className="col-5" style={{color : "#fff"}}>Sexe</p>
<p className="col-auto" style={{color : "#808191"}}>{inf.sexe}</p>

</div>

<div className="row" style={{marginLeft : "10px" , marginTop : "50px"}}>

<p className="col-5" style={{color : "#fff"}}>Email</p>
<p className="col-auto" style={{color : "#808191"}}>{inf.email}</p>

</div>

                  </Fragment>
            )
    return(
        <Fragment>
            <div className="myContainerInformation " >

                <h4 className="Title_Fiche text-success"  >Les Informations du Patient</h4>

                
               {
                isLoader
               }
                 


               
            </div>
        
        </Fragment>
    )
}

export default Informations ; 