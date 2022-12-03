import React from "react";
import { useNavigate } from "react-router-dom";

const Managecategory = () => {
    const navigate = useNavigate('');
    const [category, setCat] = React.useState('');
    
 

    const addCategory = async () => {
        
        const userid = JSON.parse(localStorage.getItem("user"))._id;
        let result =await fetch("http://localhost:5000/addcategory", {
                method:'post',
                body:JSON.stringify({category}),
                headers:{
                    'Content-Type':'application/json'
                   },
        });
       result = await result.json()
       alert("category added..")
       navigate('/category')
       console.warn(result);
    }

    const handleInputChange = ()=>{
        
    }

    return (
        <div className="divsgn">
            <h1 className="register">Add Category</h1>
            <input className="inputbox" type="text" placeholder="enter category.."
                value={category} onChange={(e) => setCat(e.target.value)} />
               <button onClick={addCategory} type="button" className="btnsn">Add category</button>

        </div>
    )
}

export default Managecategory;