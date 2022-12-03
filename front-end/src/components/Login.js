import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [password, setPassword] = useState("");
    const [emailid, setEmail] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    }, [navigate])
    
    const handleLogin = async () => {
        console.warn("email , password : ", emailid, password)
        let result = await fetch('http://localhost:5000/login', {

            method: 'post',
            body: JSON.stringify({ emailid, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);        

        //        if (result.auth){  
        //             if (result.role === "admin") {
        //                 sessionStorage.setItem("user", JSON.stringify(result.result));
        //                 sessionStorage.setItem("token", JSON.stringify(result.auth));
        //                 sessionStorage.setItem("role", JSON.stringify("admin"));
        //                 sessionStorage.setItem("firstname",JSON.stringify(result.result.firstname));
        //                 swal({
        //                     title: "Login",
        //                     text: "Admin Login Successfull!",
        //                     icon: "success",
        //                 });
    
        //                 navigate("/");
                        
        //             }
    
        //             if (result.role === "photog") {
    
        //                     sessionStorage.setItem("user", JSON.stringify(result.result));
        //                     sessionStorage.setItem("token", JSON.stringify(result.auth));
        //                     sessionStorage.setItem("role", JSON.stringify("photog"));
        //                     sessionStorage.setItem("firstname",JSON.stringify(result.result.firstname));
        //                     swal({
        //                         title: "Login",
        //                         text: "Photographer Login Successfull!",
        //                         icon: "success",
        //                     });
        
        //                     navigate("/");
                        
        //             }

        //             if (result.role === "viewer") {
        //                 sessionStorage.setItem("user", JSON.stringify(result.result));
        //                 sessionStorage.setItem("token", JSON.stringify(result.auth));
        //                 sessionStorage.setItem("role", JSON.stringify("viewer"));
        //                 sessionStorage.setItem("firstname",JSON.stringify(result.result.firstname));
        //                 swal({
        //                     title: "Login",
        //                     text: "Viewer Login Successfull!",
        //                     icon: "success",
        //                 });
    
        //                 navigate("/add");
        //             }
        //        }
        //         else{
        //             swal({
        //                 title: "Login",
        //                 text: "Invalid Emailid or Password!",
        //                 icon: "warning",
        //             });
        //         }
        //     }
        //  catch (error) {
        //     console.log(error.message);
        // }




         if (result.role==="admin") {
             localStorage.setItem("user", JSON.stringify(result));
             localStorage.setItem("role","admin");
             navigate("/adminphotolist")
         }
        else if (result.role==="viewer") {
             localStorage.setItem("user", JSON.stringify(result));
             localStorage.setItem("role","viewer");
             navigate("/home")
         }
         else if (result.role==="photog") {
             localStorage.setItem("user", JSON.stringify(result));
             localStorage.setItem("role","photog");
             navigate("/photoadd")
         }
         else {
             alert("enter correct details..")
         }
    }
    return (
        <div className='logindv'>
            <h1 className="register">Login</h1>
            <input className="inputbox" type="text" placeholder="Enter Email id" onChange={(e) => setEmail(e.target.value)} value={emailid} required></input>
            {error && !emailid && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}

            <input className="inputbox" type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password} required></input>
            {error && !password && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}

            <button className="btnsn" onClick={handleLogin} type="button">Login</button>

        </div>
    );
}

export default Login;