import React from 'react';
import {  Navigate, Outlet } from 'react-router-dom';



const PrivateRoute = ({children}:any) => {

let userdata=localStorage.getItem("userdata")
            if(userdata){
                return children
            }
            else{
                return <Navigate to={`/`}/>
            }


}



export default PrivateRoute;