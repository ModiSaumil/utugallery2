import React,{useState , useEffect } from "react"
import {useNavigate } from 'react-router-dom'

const SignUp =()=>{
    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const [emailid, setEmail]=useState("");
   
    const navigate = useNavigate();

    useEffect(()=>{
     const auth = localStorage.getItem("user");
        if(auth)
        {
            navigate('/') 
        }
    })

    const collectData=async ()=>{
        console.warn(name,emailid,password);
        let result = await fetch('http://localhost:5000/registration',{
           method : 'post',
           body : JSON.stringify({name,emailid,password}),
           headers:{
            'Content-Type':'application/json'
           },

        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/')
        
    }

    return(
        <div className="divsgn">
            <h1>Register</h1>
            <input className="inputbox" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name"></input>
            <input className="inputbox" value={emailid} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email id"></input>
            <input className="inputbox" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password"></input>
            
            <button onClick={collectData} className="btnsn"  type="button">Sign Up</button>
        </div>
    )
}

export default SignUp;