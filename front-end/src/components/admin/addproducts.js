import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate('');
    const [imgname, setName] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [cat, setCategory] = React.useState('');
    const [error, setError] = React.useState(false);

    useEffect(() => {

        getcategories();
    }, []);

    const changeCase = (event) => {
        event.preventDefault();
        setTag(event.target.value.toUpperCase());
    }

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
            body: JSON.stringify({ imgname, cat, tag, userid }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        alert("image uploaded..")
        navigate('/photolist')
        console.warn(result);
    }

    const handleInputChange = () => {

    }

    return (
        <div className="divsgn">
            <h1 className="register">Add Photos</h1>
            <input className="inputbox" type="text" placeholder="enter image name"
                value={imgname} onChange={(e) => setName(e.target.value)} />
            <input className="inputbox" type="text" placeholder="enter tag"
                value={tag} onChange={(e) => setTag(e.target.value)} onMouseEnter={changeCase} />

            {/* <select id="cat" value={cat} defaultValue="Select category"
                onChange={(e) => setCategory(e.target.value)} className="dropdownCategory">
                <option value="">Select category</option>
                <option value={'1'}>navratri</option>
                <option value={'2'}>newyear</option>
            </select> */}


             <select className='dropdownCategory' id='cat' value={cat} defaultValue="select category"
             onChange={(e) => setCategory(e.target.value)}>
                <option value={0}>
                    Select Category
                </option>

                {cat.length > 0 ? 
                    cat.map((item, index) => (
                        <option
                            key={item._id}
                            value={item.category}
                        >
                             
                            {item.category}
                        </option>
                    ))
                 : (
                    <option value={0}>
                        No Records Founds!
                    </option>
                )}
            </select> 

            <form><input type="file" className="inputbox" name="upload_file" onChange={handleInputChange} ></input>
            </form>

            <button onClick={addProduct} type="button" className="btnsn">Add photo</button>

        </div>
    )
}

export default AddProduct;