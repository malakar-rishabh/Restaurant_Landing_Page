import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaWifi, FaGooglePlusG } from 'react-icons/fa'; // Importing icons from react-icons

function Footer() {
    return (
        <div className="footer-container">
            <p>Desgined by Elegent Themes | Powered by WordPress</p>
            <div className="icon-container">
                <FaFacebook className="icon" />
                <FaTwitter className="icon" />
                <FaGooglePlusG className="icon" />
                <FaWifi className="icon" />
            </div>
        </div>
    );
}

export default Footer;