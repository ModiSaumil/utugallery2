import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";

const Viewerprofile = () => {
    // const [enrollmentno, setEnro] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [contactno, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [emailid, setEmail] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    // const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(e)=>{
        setPassword(e.target.value);
    }
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getUserDetails();
        
    }, [])

    const togglePassword =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }

    const getUserDetails = async () => {

        let result = await fetch(`http://localhost:5000/update_users/${params.id}`);
        result = await result.json();

        // setEnro(result.enrollmentno)
        setFname(result.fname)
        setLname(result.lname)
        setContact(result.contactno)
        setPassword(result.password)
        setEmail(result.emailid)
    }

    const updateuser = async () => {
        let result = fetch(`http://localhost:5000/update_users/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ fname, lname, contactno, password, emailid }),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = (await result).json()
        console.warn(result)

        navigate('/photolist');
    }

    return (
        <div className="divsgn">
            <h1 className="register">Profile</h1>
            {/* <input className="inputbox" value={enrollmentno} onChange={(e) => setEnro(e.target.value)} type="text" placeholder="Enter Enrollment Number"></input> */}
            <input className="inputbox" value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="Enter First Name"></input>
            <input className="inputbox" value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Enter Last Name"></input>
            <input className="inputbox" value={contactno} onChange={(e) => setContact(e.target.value)} type="text" placeholder="Enter Contact Number"></input>
            <input className="inputbox" value={emailid} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email id"></input>
            <input className="inputbox" value={password}  onChange={(e) => setPassword(e.target.value)} type={passwordType} placeholder="Enter Password"></input>
            <button className="btnsn" onClick={togglePassword}>
                     { passwordType==="password"? <a>view</a> :<a>hide</a> }
                     </button>
            <button onClick={updateuser} className="btnsn" type="button">Update</button>
        </div>
    )

}


export default Viewerprofile;