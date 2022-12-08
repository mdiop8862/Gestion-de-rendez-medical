import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import style from "./IndexInfo.css" ; 
import {CgNotes  } from "react-icons/cg" ; 
import {FaListUl} from "react-icons/fa" ; 
import {BsHourglassTop} from "react-icons/bs" ; 
import {TfiStamp} from "react-icons/tfi" ; 
import {FaStamp} from "react-icons/fa" ; 
import {FaSave} from "react-icons/fa" ; 
import OrdonnanceModal from "./OrdonnanceModal";
import OrdonnanceToImprime from "./OrdonnanceToImprime";
import ModalBilan from "./ModalBilan";
import ModalArretTravail from "./ModalArretTravail";

const Info = (props)=>{
       const NormalLink = "nav-link   myitem "
       const activeLink = " myitem nav-link activeLink " 
      
        const [Ordonnance , setOrdonnance ] = useState(false)
        const [Bilan , setBilan] = useState(false) 
        const [ArretTravail , setArretTravail] = useState(false) 
        const [writteOrdonnace , setWritteOrdonnance] = useState([])

        const ShowBilan = ()=>{
          setBilan(true)
        }

         const ShowOrdonnance = ()=>{
              setOrdonnance(true)
         }

         const ShowArretTravail = ()=>{
          setArretTravail(true)
         }
         
         const ifCloseArretTravaail = (inf)=>{
            setArretTravail(inf)
         }

         const ifCloseOrdonnance = (inf)=>{

          if(inf===false){
             setOrdonnance(false)
               
          }
  
         }

         const ifCloseBilan = (inf)=>{
          if(inf===false){
            setBilan(false)
              
         }

         }

        


    return(
      <div className="Container MyContainerInfo1">

        <nav className="navbar navbar-expand-lg myhnav mb-2">
          <div className="container">
            <ul className="navbar-nav myliste" >

              <li className="nav-item myitem" style={{marginLeft : "-40px"}}><button className="btn btn-success" onClick={ShowOrdonnance}><span><CgNotes/></span> Ordonnance</button></li>

              <li className="nav-item myitem" style={{marginLeft : "55px"}}><button className="btn btn-success" onClick={ShowBilan}><span><FaListUl/></span> Bilan</button></li>

              <li className="nav-item myitem" style={{marginLeft : "55px"}}><button className="btn btn-success" onClick={ShowArretTravail}><span><BsHourglassTop/></span> Arret de travail</button></li>

              

              




            </ul>

          </div>

          {
                   (Ordonnance === true) && (<OrdonnanceModal myfunc = {ifCloseOrdonnance} />) 


         }
         {
                                        (Bilan === true ) && (<ModalBilan myfunc={ifCloseBilan} />)
         }

         {
                                   (ArretTravail === true ) && (<ModalArretTravail myfunc={ifCloseArretTravaail}/>)
         }
         
        
        
 
        </nav>


        

       <nav className="navbar navbar-expand-lg myhnav mb-2">

       <div className="container">

         <ul className="navbar-nav myliste "  >

          <li className="nav-item   " style={{marginLeft : "-47px"  } }><NavLink to={"Fiche"} className={({isActive}) => (isActive ? activeLink : NormalLink)} >Fiche Consultation</NavLink></li>

          <li className="nav-item  " style={{marginLeft : "20px"  }}><NavLink to={"Informations"} className={({isActive}) => (isActive ? activeLink : NormalLink)} >Informations</NavLink></li>

          <li className="nav-item  " style={{ marginLeft : "20px"}}><NavLink to={"NextRv"} className={({isActive}) => (isActive ? activeLink : NormalLink)}  >Prochain RDV</NavLink></li>

          <li className="nav-item  " style={{marginLeft : "20px"}}><NavLink to={`/Info/${30}/DossierMedical/ListConsultation/${1}`} className={({isActive}) => (isActive ? activeLink : NormalLink)}  >Dossier Medical</NavLink></li>

         </ul>
      

        </div>


       </nav>
             
      {/*}    <nav className="navbar navbar-expand-lg myhnav">

            <div className="container">

             <ul className="navbar-nav myliste row col-10">
                <li className="nav-item col-3 myitem text-center">
                    
                    <NavLink to={"Fiche"} className={({isActive}) => (isActive ? activeLink : NormalLink)}   >Fiche Consultation</NavLink>
                     
                
                </li>
                <li className="nav-item col-3 myitem text-center myborder "><NavLink to={"Informations"} className={({isActive}) => (isActive ? activeLink : NormalLink)}>Informations</NavLink></li>
                <li className="nav-item col-3 myitem text-center myborder"><NavLink to={"NextRv"} className={({isActive}) => (isActive ? activeLink : NormalLink)}>Prochain RDV</NavLink></li>
             </ul>
            </div>

          </nav>

             <Outlet/>

    {*/}

    <Outlet/>
                       
      </div>
    )
}
export default Info ; 