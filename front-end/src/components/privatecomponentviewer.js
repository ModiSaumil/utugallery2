import React from "react";
import {Navigate,Outlet} from 'react-router-dom';
import Navviewer from "./navviewer";

const Privatecomponentviewer=()=>{
    const auth = localStorage.getItem("user");

    return auth?<><Navviewer></Navviewer><Outlet /></>:
    <Navigate to="/SignUp" />
}

export default Privatecomponentviewer;