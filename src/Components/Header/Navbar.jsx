
import React, { useRef, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';



function Navbar() {
    const [menuOpen,setMenuOpen] = useState(false)
    const handleMenuItemClick = () => {
        setMenuOpen(false); // Close the menu when a menu item is clicked
    };

    return (
        <>
            <div className="navbar">
                <div className="colr"></div>
                {/* ----------UPPER NAVBAR---------- */}
                <div className="upper-navbar">
                    <div className="logo">
                        <h1>Tro<span>Weld</span></h1>
                    </div>
                    <div className="nav">
                        <ul>
                            <li><span><i class="fa-solid fa-location-dot"></i></span>Location</li>
                            <li><span><i class="fa-solid fa-phone"></i></span>Call:01 123445678990</li>
                            <li><span><i class="fa-solid fa-envelope"></i></span>ak819@gmail.com</li>
                        </ul>
                    </div>
                    <div className="icons">
                        <ul>
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-linkedin-in"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                        </ul>
                    </div>
                    <div className="bar" onClick={()=>setMenuOpen(!menuOpen)}>
                    <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
                {/* -----------LOWER NAVBAR------- */}
                <div className={`lower-navbar ${ menuOpen ? 'open': '' }`}>
                    <ul>
                        <li className='li'><Link to='/' onClick={handleMenuItemClick}>HOME</Link></li>
                        <li className='li'><Link to='/about' onClick={handleMenuItemClick}>ABOUT</Link></li>
                        <li className='li'><Link to='/portfolio' onClick={handleMenuItemClick}>PORTFOLIO</Link></li>
                        <li className='li'><Link to='/services' onClick={handleMenuItemClick}>SERVICES</Link></li>
                        <li className='li'><Link to='/contact' onClick={handleMenuItemClick}>CONTACT</Link></li>
                        <li className='li'><a href=""><span><i class="fa-solid fa-user user"></i></span>LOGIN</a></li>
                        <li><a href=""><span><i class="fa-solid fa-magnifying-glass srh"></i></span></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar





























