import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";

const Resetpass = () => {
    // const [enrollmentno, setEnro] = useState("");
    // const [fname, setFname] = useState("");
    // const [lname, setLname] = useState("");
    // const [contactno, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [emailid, setEmail] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    const auth = localStorage.getItem("data");

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        // const userid = JSON.parse(localStorage.getItem("data"))._id;
        let result = await fetch(`http://localhost:5000/update_users/${params.id}`);
        result = await result.json();
      
        // setEnro(result.enrollmentno)
        // setFname(result.fname)
        // setLname(result.lname)
        // setContact(result.contactno)
        setPassword(result.password)
        setEmail(result.emailid)
    }

    const updateuser = async (emailid) => {
        let result = fetch(`http://localhost:5000/updateUserbyemailid/${emailid}`, {
            method: 'Put',
            body: JSON.stringify({ emailid, password }),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = (await result).json()
        console.warn(result)
        alert('password updated..')
        navigate('/Login');
        localStorage.clear();
    }

 

    return (
        <div className="divsgn">
            <h1 className="register">Reset password</h1>
            {/* <input className="inputbox" value={enrollmentno} onChange={(e) => setEnro(e.target.value)} type="text" placeholder="Enter Enrollment Number"></input> */}
            {/* <input className="inputbox" value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="Enter First Name"></input> */}
            {/* <input className="inputbox" value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Enter Last Name"></input> */}
            {/* <input className="inputbox" value={contactno} onChange={(e) => setContact(e.target.value)} type="text" placeholder="Enter Contact Number"></input> */}
            <input className="inputbox" value={emailid} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email id"></input>
            <input className="inputbox" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"></input>

            <button onClick={updateuser} className="btnsn" type="button">confirm</button>
        </div>
    )

}


export default Resetpass;