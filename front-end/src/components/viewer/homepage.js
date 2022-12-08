import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
    const [photos, setPhoto] = React.useState([]);
    const [img , setImg] = React.useState([]) 
    const navigate = useNavigate();

    useEffect(() => {
        getalllist();

    }, [])

    const getalllist = async () => {
        let result = await fetch("http://localhost:5000/getphotos");
        result = await result.json();
        console.log(result)
        setPhoto(result)
        //http://192.168.1.103:5000/
        // localStorage.setItem("photos", JSON.stringify(result));
        // // const userid = JSON.parse(localStorage.getItem("user"))._id;
        // const photol = JSON.parse(localStorage.getItem('photos')).photo;
        // setImg(photol)
        // console.warn(photo)
    }
    // console.warn("photo", photos);

    const searchHandle = async (event) => {

        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/searchtags/${key}`)
            result = await result.json();
            if (result) {
                setPhoto(result);
            }
        } else {
            getalllist();
        }

    }

    return (

        <div className="wrap">
            <input className="animation" onChange={searchHandle} type="text" placeholder='enter any tag to search..'></input>
            {
                photos.length > 0 ? photos.map((item, index) => (
                    <div className="tile">
                        <img src={`http://localhost:5000/${item.photo}`} alt="aree yaarrrr" />
                        <div className="text">
                            <h1>{item.imgname}</h1>
                            <h2 className="animate-text">{item.category}</h2>
                            <p className="animate-text">{item.tag}</p>
                        </div>
                    </div>
                ))
                    : <p><strong>No Records
                        Founds!</strong></p>
            }
        </div>

    )
}

export default Homepage;