import React,{useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

const Login =()=>{
    const [password, setPassword]=useState("");
    const [emailid, setEmail]=useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate("/")
        }
    },[navigate])
    const handleLogin= async ()=>{
        console.warn("email , password : ",emailid,password)
        let result = await fetch('http://localhost:5000/login',{
            
        method:'post',
        body:JSON.stringify({emailid,password}),
        headers:{
            'Content-Type':'application/json'
        }


        });
        result = await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/")
        }else{
            alert("enter correct details..")
        }
    }
    return(
        <div className='logindv'>
            <h1>Login</h1>
            <input className="inputbox" type="text" placeholder="Enter Email id" onChange={(e)=>setEmail(e.target.value)} value={emailid}></input>
            <input className="inputbox" type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            
            <button className="btnsn" onClick={handleLogin} type="button">Login</button>
        
        </div>
    )
}

export default Login;