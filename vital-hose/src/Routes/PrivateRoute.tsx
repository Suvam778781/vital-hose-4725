import React from 'react';
import {  Navigate, Outlet } from 'react-router-dom';



const PrivateRoute = (props:any) => {

    return (
        <Outlet {...props} component={(props:any)=>{
            const token = window.localStorage.getItem('token');
            if(token){
                return <props.component {...props}/>
            }
            else{
                return <Navigate to={`/`}/>
            }
        }}
        />
    )
}



export default PrivateRoute;