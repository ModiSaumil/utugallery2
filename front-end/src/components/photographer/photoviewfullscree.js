import React, { useState, useEffect } from 'react';
import { Link, useParams,useNavigate } from "react-router-dom";

const Photoviewfull = () => {
    const [photo, setPhoto] = React.useState([]);
    const   navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        getalllist();
       
    }, [])

    const getalllist = async () => {
        let result = await fetch(`http://localhost:5000/getPhotosbyid/${params.id}`);
        result = await result.json();
        setPhoto(result)
    }
    console.warn("photo", photo);

    return (
        <div>
            {/* <h3>All Photos list</h3> */}
            {/* <input className="animation" onChange={searchHandle} type="text" placeholder='enter to search..'></input> */}
            <table className='tablecss'>
                {/* <thead>
                    <tr className='trcss'>
                        <th>SR No.</th>
                        {/* <th>userid</th> 
                        <th>Image name</th>
                        <th>Tag</th>
                        <th>Category</th>
                        <th>Images</th>
                        <th>Operations</th>
                    </tr>
                </thead> */}
                <tbody>
                    {
                        photo.length > 0 ? photo.map((item, index) => (
                            <tr key={item._id} className='trcss img'>
                                {/* <td className='tdcss'>{index + 1}</td> */}
                                {/* <td className='tdcss'>{item.userid}</td> */}
                                {/* <td className='tdcss'>{item.imgname}</td> */}
                                {/* <td className='tdcss'>{item.tag}</td> */}
                                {/* <td className='tdcss'>{item.category}</td> */}
                                
                                <td className='tdcsss'>{item ? 
                                    <img src={`http://localhost:5000/${item.photo}`} alt={item.imgname} />
                                    
                                    :
                                    <span>deleted</span>
                                }</td>
                                {/* <td className='tdcss'><button onClick={()=>deleteProduct(item._id)}>Delete</button> */}
                                {/* <Link to={"/photoupdate/" + item._id}>Update</Link></td> */}
                            </tr>
                        ))
                            : <tr> <td><strong>No Records
                                Found!</strong></td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Photoviewfull;
