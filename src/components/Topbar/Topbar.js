import React from "react";
import style from "./TopbarStyle.css" ;
import profil from "../../images/profil.jpg" ;
import auth from "../../Firebase/Firebase"  ;

const Topbar = ()=>{
    return(
        <nav className=" topbar  fixed-top  d-flex ">
            <form className="col-1  ">
                    <input className="MyInput" type={"text"} placeholder="search" />
            </form>

            <div className="d-flex justify-content-end info col-11">

                 <div className="d-flex ">
                  <i className="ri-notification-3-line  notif fs-5 "></i>
                  <img src={profil} width="100%" className="profil "/>

                </div>
                 
                 
            </div>
 
        </nav>

    )
}

export default Topbar ; 