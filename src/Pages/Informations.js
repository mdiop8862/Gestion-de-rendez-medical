import React, { Fragment } from "react";
import style from "./Informations.css" ;

const  Informations = ()=>{
    return(
        <Fragment>
            <div className="myContainerInformation " >

                <h4 className="Title_Fiche text-success"  >Les Informations du Patient</h4>

                 <div className="row" style={{marginLeft : "10px" , marginTop : "40px"}}>

                  <p className="col-5" style={{color : "#fff"}}>Nom & Prenom</p>
                  <p className="col-auto" style={{color : "#808191"}}>Moussa Diop</p>
                  
                 </div>

                  <div className="row" style={{marginLeft : "10px" , marginTop : "42px"}}>

                  <p className="col-5" style={{color : "#fff"}}>Date De Naissance</p>
                  <p className="col-auto" style={{color : "#808191"}}>Moussa Diop</p>
                  
                 </div>

                  <div className="row" style={{marginLeft : "10px" , marginTop : "42px"}}>

                  <p className="col-5" style={{color : "#fff"}}>Addresse</p>
                  <p className="col-auto" style={{color : "#808191"}}>Moussa Diop</p>
                  
                 </div>

                  <div className="row" style={{marginLeft : "10px" , marginTop : "42px"}}>

                  <p className="col-5" style={{color : "#fff"}}>Telephone</p>
                  <p className="col-auto" style={{color : "#808191"}}>Moussa Diop</p>
                  
                 </div>

                  <div className="row" style={{marginLeft : "10px" , marginTop : "42px"}}>

                  <p className="col-5" style={{color : "#fff"}}>Sexe</p>
                  <p className="col-auto" style={{color : "#808191"}}>Moussa Diop</p>
                  
                 </div>

                  <div className="row" style={{marginLeft : "10px" , marginTop : "42px"}}>

                  <p className="col-5" style={{color : "#fff"}}>Email</p>
                  <p className="col-auto" style={{color : "#808191"}}>Moussa Diop</p>
                  
                 </div>

                  <div className="row" style={{marginLeft : "10px" , marginTop : "42px"}}>

                  <p className="col-5" style={{color : "#fff"}}>Nom & Prenom</p>
                  <p className="col-auto" style={{color : "#808191"}}>Moussa Diop</p>
                  
                 </div>


               
            </div>
        
        </Fragment>
    )
}

export default Informations ; 