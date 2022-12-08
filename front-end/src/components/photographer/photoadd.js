import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate('');
    const [imgname, setName] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [error, setError] = React.useState(false);
    const [photo, setPhoto] = React.useState('');

    useEffect(() => {

        getcategories();
    }, []);



    const getcategories = async () => {
        let result = await fetch('http://localhost:5000/getcategories');
        result = await result.json();
        setCategory(result.data);
        console.warn(result.data);
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
                value={tag} onChange={(e) => setTag(e.target.value)} />

            {/* <select id="cat" value={cat} defaultValue="Select category"
                onChange={(e) => setCategory(e.target.value)} className="dropdownCategory">
                <option value="">Select category</option>
                <option value={'1'}>navratri</option>
                <option value={'2'}>newyear</option>
            </select> */}


            <select id='category' className='dropdownCategory' defaultValue="select category" value={category} onChange={(e) => setCategory(e.target.value)}>
                {category.length > 0 ? (
                    category.map((item, index) => (
                        <option
                            key={item._id}
                            value={item.category}
                        >
                            {item.category}
                        </option>
                    ))
                ) : (
                    <option value={0}>
                        No Records Found!
                    </option>
                )}
            </select>

            <form><input type="file" className="inputbox" name="upload_file"  ></input>
            </form>

            <button onClick={addProduct} type="button" className="btnsn">Add photo</button>

        </div>
    )
}

export default AddProduct;