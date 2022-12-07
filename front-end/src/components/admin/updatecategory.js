import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Updatecategory = () => {
   
    
    const params = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = React.useState('');
 
    useEffect(() => {
        getcategoriesdetails();
        
    }, [])

    

    const getcategoriesdetails = async ()=>{
        console.warn(params)
        let result = await fetch(`http://localhost:5000/update_category/${params.id}`);
        result = await result.json();
        setCategory(result.category)
       console.warn(result)
        
    }

    const updatecategory = async ()=>{
        let result = fetch(`http://localhost:5000/update_category/${params.id}`,{
            method:'Put',
            body:JSON.stringify({category}),
            headers:{
                'Content-Type':"application/json"
            }
        });
        result = (await result).json()
        console.warn(result)
        navigate('/managecategories')
    }

    return (

        <div className="divsgn">
            <h1 className="register">Update Category</h1>
            <input className="inputbox" type="text" placeholder="enter category"
                value={category} onChange={(e) => setCategory(e.target.value)} />
            <button onClick={updatecategory} type="button" className="btnsn">update Category</button>

        </div>
    )
}

export default Updatecategory;