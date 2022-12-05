import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navphotographer = () => {
    const auth = localStorage.getItem("user");
    const [products, setProducts] = useState('');
    const navigate = useNavigate();


    const getProducts = async () => {
                  let result = await fetch('http://localhost:5000/getphotos');
                  result = await result.json();
                  setProducts(result);
                  //console.warn(result);
              }

    

    const logout = () => {

        localStorage.clear();
        navigate('/')
    }
    return (
        <div>
           
            {auth ? <ul className='nav-ul'>
                <li className='logout'>Welcome,{JSON.parse(auth).fname} {JSON.parse(auth).lname}</li>
                <li><Link to="/photolist">My Photos</Link> </li>
                <li><Link to="/photoadd">Add Photos</Link> </li>
                {/* <li><Link to="/update">UpdatePhotos</Link> </li> */}
                {/* <Link to={"/update/"+img._id}>Update</Link> */}
                <li><Link to={"/profileg/"+JSON.parse(auth)._id}>Profile</Link> </li>
                <li ><Link onClick={logout} to="/SignUp">Logout</Link></li>
                
            </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><Link to="/SignUp">SignUp</Link></li>
                    <li><Link to="/Login">Login</Link></li>

                </ul>
            }
        </div>
    )
}

export default Navphotographer;