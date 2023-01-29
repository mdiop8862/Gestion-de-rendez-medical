import React, { Fragment, useState } from "react";
import "./HomePage.css" ; 
import { Pie , Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS , 
  Title , 
  Legend

} from 'chart.js/auto';

const HomePage = () =>{

 const [myval , setval]= useState("moussa")

 const handle=(myval)=>{
     setval(myval)
 }

    const data = {

        labels: ['Covid', 'Paludisme', 'Sida', 'Tuberculose', 'Cancer', 'Prostate'],

        datasets: [
          {
            data: [5, 2, 1, 3, 1, 4],

            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ]
           
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            display : false
          },
          title: {
            display: true,
            text: 'LES MOTIFS DE CONSULTATION LES PLUS FREQUENTS DANS LE MOIS ACTUEL',
          },
        },
      };

    return(
        <Fragment>

            <div className="HommePage" >
              
              <input value={myval} onChange={handle} />
            

                <div className="container">

                    
                    <div className="" style={{marginTop : "100px"  }}>

                      

                                 <Bar data={data} options={options} />

                      

                      

                       

                    </div>

                </div>

                
            </div>

        </Fragment>
    )
}
export default HomePage ; 
