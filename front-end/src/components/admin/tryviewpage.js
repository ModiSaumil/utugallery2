import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Tryviewpage = () => {
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
        <div>
            <h3>product try list</h3>
            <table className='tablecss'>
                <thead>
                    <tr className='trcss'>
                        <th>SR No.</th>
                        <th>userid</th>
                        <th>img name</th>
                        <th>tag</th>
                        
                        <th>photo</th>
                        <th>operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        photo.length > 0 ? photo.map((item, index) => (
                            <tr key={item._id} className='trcss'>
                                <td className='tdcss'>{index + 1}</td>
                                <td className='tdcss'>{item.userid}</td>
                                <td className='tdcss'>{item.imgname}</td>
                                <td className='tdcss'>{item.tag}</td>
                                <td className='tdcss'>{item ?
                                    <img src="../categories/" alt={item.imgname} />
                                    :
                                    <span>deleted</span>
                                }</td>
                                <td className='tdcss'><button>Delete</button>
                                <Link to={"/photoupdate/" + item._id}>Update</Link></td>
                            </tr>
                        ))
                            : <tr> <td><strong>No Records
                                Founds!</strong></td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tryviewpage;