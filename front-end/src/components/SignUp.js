import React, { useState, useEffect } from "react"

import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [enrollmentno, setEnro] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [contactno, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [emailid, setEmail] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    // const role = [
    //     { label: "Viewer"},
    //     { label: "Photographer"},
    //   ];

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/')
        }
    })

    const collectData = async () => {
        console.warn(enrollmentno, fname, lname, emailid, password, contactno, role);
        let result = await fetch('http://localhost:5000/registration', {
            method: 'post',
            body: JSON.stringify({ enrollmentno, fname, lname, emailid, password, contactno, role }),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/');

    }

    return (
        <div className="divsgn">
            <h1 className="register">Register</h1>
            <input className="inputbox" value={enrollmentno} onChange={(e) => setEnro(e.target.value)} type="text" placeholder="Enter Enrollment Number"></input>
            <input className="inputbox" value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="Enter First Name"></input>
            <input className="inputbox" value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Enter Last Name"></input>
            <input className="inputbox" value={contactno} onChange={(e) => setContact(e.target.value)} type="text" placeholder="Enter Contact Number"></input>
            <input className="inputbox" value={emailid} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email id"></input>
            <input className="inputbox" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"></input>
            {/* <input className="inputbox" value={one} onChange={(e) => setRole(e.target.value)} type="text" placeholder="Enter Role"></input> */}

            <select id="role" defaultValue="Select Role"
                onChange={(e) => setRole(e.target.value)} className="dropdown">
                <option>Select Role</option>
                <option value="viewer">Viewer</option>
                <option value="Photog">Photographer</option>
            </select>


            <button onClick={collectData} className="btnsn" type="button">Sign Up</button>
        </div>
    )
}

export default SignUp;