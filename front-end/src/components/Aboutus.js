import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const AboutUS = () => {

    const navigate = useNavigate();

    useEffect(() => {
        
        const auth = localStorage.getItem("role");
        console.log(auth);
        if(auth)
        {
            if(auth==="admin")
            {
                navigate("/adminphotolist")
            }
            else if (auth==="viewer") {
                navigate("/home")
            }
            else if (auth==="photog") {
                navigate("/photoadd")
            }
            else {
                navigate("/Login")
            }
        }
    })


    return (
        <div>
            <h1>Uka Tarsadiya University Photo Gallery</h1>
            <a href='http://utu.ac.in/'>visit us</a>
        </div>
    )
}

export default AboutUS;