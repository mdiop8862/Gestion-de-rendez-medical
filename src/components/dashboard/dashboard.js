import React, { Fragment } from "react";
import "./dashboard.css"
import SideBar from "../Sidebar/SideBar";
import Topbar from "../Topbar/Topbar";
import { NavLink } from "react-router-dom";
import MyRoutes from "../../MyRoutes/MyRoutes";
import { Outlet } from "react-router-dom";

const Dashboard = ()=>{
    return(
        
        <div className="dashboard d-flex ">

                   <SideBar></SideBar>   

                  

          
                      
                               
                <div className="col-10 contentTop  ">

            
               <Topbar></Topbar> 

                <div className=" content ">

                    

                     <MyRoutes>
                        
                     </MyRoutes>


                   
                </div>

                 </div>

                <div>
               
                </div>   
          
          
          
          
          
          
          

               
             
        </div>
    )
}

export default Dashboard ; 