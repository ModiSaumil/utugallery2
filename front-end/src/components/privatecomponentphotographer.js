import React from "react";
import {Navigate,Outlet} from 'react-router-dom';
import Navphotographer from "./navphotgrapher";

const Privatecomponentphotographer=()=>{
    const auth = localStorage.getItem("user");

    return auth?<><Navphotographer/><Outlet /></>:
    <Navigate to="/SignUp" />
}

export default Privatecomponentphotographer;