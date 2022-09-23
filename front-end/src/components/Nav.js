import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem("user");

    const navigate = useNavigate();

    const logout = () => {

        localStorage.clear();
        navigate('/SignUp')
    }
    return (
        <div>
            <img
                alt='logo'
                className='logo'
                src='../logo.png' />
            {auth ? <ul className='nav-ul'>
                <li className='logout'>Welcome,{JSON.parse(auth).fname} {JSON.parse(auth).lname}</li>
                <li><Link to="/">Photos</Link> </li>
                <li><Link to="/add">Add Photos</Link> </li>
                <li><Link to="/update">Update Photos</Link> </li>

                <li><Link to="/profile">Profile</Link> </li>
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

export default Nav;