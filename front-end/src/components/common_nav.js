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

        // <main className="hero-section">
        //     <section className="cont">
                
        //             <nav className="navi">
                    
                        
        //                 {/* <h3 className='logon' name='logo'>UTU Photo Gallery</h3> */}
        //                 <h1 className="navi-logo">UTU Photo Gallery</h1>
        //                 <img
        //                     alt='logo'
        //                     className='logo'
        //                     src='../logo.png' />
        //                 {auth ? <ul></ul> :
                        
        //                 <ul className="navi-links">
                        
        //                     <li><Link to="/">Home</Link></li>
        //                     <li><Link to="/aboutus">About Us</Link></li>
        //                     <li><Link to="/SignUp">SignUp</Link></li>
        //                     <li><Link to="/Login">Login</Link></li>
        //                 </ul>
        //                 }
        //             </nav>
        //             {/* <div class="hero-text">
        //                 <h2 class="hero-welcome-text">Welcome To</h2>
        //                 <h1 class="hero-country">JAPAN</h1>
        //                 <p class="hero-text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, error quasi molestias in ipsam non asperiores adipisci voluptatem.</p>
                        
        //             </div> */}
              
        //     </section>
        // </main>

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