import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CommonNav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();

    const logout = () => {

        localStorage.clear();
        navigate('/')
    }
    return (
        <div>
            <img
                alt='logo'
                className='logo'
                src='../logo.png' />
            <h3 className='logon' name='logo'>UTU Photo Gallery</h3>
            {auth ? <ul className='nav-ul'>


            </ul>
                :
                <ul className='navcom'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/SignUp">SignUp</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default CommonNav;