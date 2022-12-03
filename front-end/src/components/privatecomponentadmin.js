import React from "react";
import {Navigate,Outlet} from 'react-router-dom';
import Nav from "./Nav";

const Privatecomponentadmin=()=>{
    const auth = localStorage.getItem("user");

    return auth?<><Nav></Nav><Outlet /></>:
    <Navigate to="/SignUp" />
}

export default Privatecomponentadmin;