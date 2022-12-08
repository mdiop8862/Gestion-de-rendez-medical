import React, { Fragment } from "react";
import {GiStethoscope} from "react-icons/gi" ; 
import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";


const BilanToImprime = (props)=>{
    const mydiv = useRef(null)  
    return(
        <Fragment>

<div className="myContainerThree">

<div ref={mydiv}>

<h5 className="text-dark text-center fw-bold">CLINIQUE DIOP</h5>
<hr id="mysep"/>
<div className="row justify-content-between ">
    <div className="col-4">
           <p>Dr Moussa Diop</p>
           <p>Medecin general</p>
           <p>N° 2366236</p>

    </div>

    <div className="col-1 "  style={{fontSize : "60px" , fontWeight : "bold" , marginTop : "-15px" , marginLeft : "-60px"}}><GiStethoscope/></div>   

    <div className="col-4 ">

        <p>Date : 02/02/2001</p>
        <p>Age: 12 ans</p>
        <p>Addresse : Dakar </p>
        
    </div>                 

   
    
</div> 

<h5 className="text-dark text-center fw-bold" style={{marginTop : "10px"}}>Bilan</h5>

         {
            props.tests.map((test)=>{

                return(
                    <p className="test-dark">{`${props.tests.findIndex(Element => Element === test)+1}. ${test}`}</p>
                )
            })

         }

     <hr id="mysep2" />

     <div className="text-center">
        <p className="text-dark">Email : mdiop8862@gmail.com</p>
        <p className="text-dark">Dakar - Yarakh Hann Montagne </p>

     </div>

    
 




    <div/>

    </div>

    <div className="d-flex justify-content-end" style={{padding : "10px"}}>
        <button className="btn btn-secondary" onClick={()=>props.myfunc(false)} >Annuler</button>
        <ReactToPrint   

        trigger={()=><button className="btn btn-primary" style={{marginLeft : "10px"}}>Imprimer</button>}

        content = {()=>mydiv.current}

        
        
        />
        

     </div>


</div>


        </Fragment>
    )
}

export default BilanToImprime ; 