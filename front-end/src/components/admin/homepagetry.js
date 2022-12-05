import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Homepagetry = () => {
    const [photo, setPhoto] = React.useState([]);

    useEffect(() => {
        getalllist();
    }, [])

    const getalllist = async () => {
        let result = await fetch("http://localhost:5000/getphotos");
        result = await result.json();
        setPhoto(result)
    }
    console.warn("photo", photo);

    return (

        <div className="wrap">
            {
                photo.length > 0 ? photo.map((item, index) => (
                    <div className="tile">
                        <img src={item.photo} />
                        <div className="text">
                            <h1>{item.imgname}</h1>
                            <h2 className="animate-text">{item.category}</h2>
                            <p className="animate-text">{item.tag}</p>
                        </div>
                    </div>
                ))
                    : <tr> <td><strong>No Records
                        Founds!</strong></td></tr>
            }
        </div>

    )
}

export default Homepagetry;