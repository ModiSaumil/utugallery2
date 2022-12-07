import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate('');
    const [imgname, setName] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [cat, setCategory] = React.useState('');
    const [error, setError] = React.useState(false);
    const [category, setCategoryname] = React.useState('');

  

    useEffect(() => {
        getcategories();
        
    }, [])

    

    const getcategories = async () => {
        let result = await fetch('http://localhost:5000/getcategories');
        result = await result.json();
        setCategory(result);
        console.log(result);
    }

    const addProduct = async () => {
        console.warn(imgname, tag);
        const userid = JSON.parse(localStorage.getItem("user"))._id;
        let result = await fetch("http://localhost:5000/addproduct", {
            method: 'post',
            body: JSON.stringify({ imgname, category, tag, userid }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        alert("image uploaded..")
        navigate('/photolist')
        console.warn(category);
        console.warn(cat);
        console.warn(result);
    }

    const handleInputChange = (e) => {
        setCategoryname(e.target.value)
        console.warn(category);
    }

    const handlechange = () =>{

    }

    return (
        <div className="divsgn">
            <h1 className="register">Add Photos</h1>
            <input className="inputbox" type="text" placeholder="enter image name"
                value={imgname} onChange={(e) => setName(e.target.value)} />
            <input className="inputbox" type="text" placeholder="enter tag"
                value={tag} onChange={(e) => setTag(e.target.value)} />

            <select className='dropdown' id='cat' defaultValue="select category"
                onChange={(e) => setCategoryname(e.target.value)}>
            
                <option value={0}>
                    Select Category
                </option>

                {cat.length > 0 ? (
                    cat.map((item, index) => (
                        <option
                            key={item._id}
                            value={item.category}
                        >

                            {item.category}
                        </option>
                    ))
                   ) : (
                        <option value={0}>
                            No Records Founds!
                        </option>
                    )}
            </select> 

            <form><input type="file" className="inputbox" name="upload_file" onChange={handlechange} ></input>
            </form>

            <button onClick={addProduct} type="button" className="btnsn">Add photo</button>

        </div>
    )
}

export default AddProduct;