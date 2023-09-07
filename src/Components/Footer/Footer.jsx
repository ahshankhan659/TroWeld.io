import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
    <div className="footer">
        <h1>Tro<span>Weld</span></h1>
        <div className="main-footer">
            <div className="link">
                <h2 className='head'>USEFUL LINK</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className="welding">
                <h2 className='head'>WELDING</h2>
                <p>Lorem ipsum dolor sit amet <br/> consectetur <br/> adipisicing elit.</p>
            </div>
            <div className="social-icons">
            <h2 className='head'>SOCIAL MEDIA</h2>
                <span><i class="fa-brands fa-youtube"></i></span>
                <span><i class="fa-brands fa-instagram"></i></span>
                <span><i class="fa-brands fa-linkedin-in"></i></span>
                <span><i class="fa-brands fa-twitter"></i></span>
            </div>
            <div className="welding">
                <h2 className='head'>OUR WELDING CENTER</h2>
                <p>Lorem ipsum dolor sit amet <br/> consectetur <br/> adipisicing elit.</p>
            </div>
        </div>
        <div className="bottom-footer">
            <span><i class="fa-solid fa-location-dot"></i><p> Defence View Phase-2</p></span>
            <span><i class="fa-solid fa-phone"></i><p> Call +92 3136745659</p></span>
            <span><i class="fa-solid fa-envelope"></i><p> akahshankhan69@gmail.com</p></span>
            <span><i class="fa-brands fa-github"></i><p> ahshankhan659.com</p></span>
            
        </div>
        <p className='copy'>Copyright @ 2022 by Ahshan Khan All Right Reserved.</p>
    </div>
    </>
  )
}

export default Footer