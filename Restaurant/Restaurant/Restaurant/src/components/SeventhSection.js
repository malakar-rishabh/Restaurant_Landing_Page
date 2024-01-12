import React from 'react';
import './SeventhSection.css';
import Footer from './Footer';

function SeventhSection() {
    return (
        <>
        <div className="seventh-main-container">
            <div className="box box-1">
                <h1>Hours of Operation</h1>
                <h4 className="first_h4">MON-FRI</h4>
                <p>10:00am - 10:00pm</p>
                <p>4:00pm - 10:30pm</p>
                <hr />
                <h4>SAT</h4>
                <p>3:00pm - 10:30pm</p>
                <hr />
                <h4>SUN</h4>
                <p>We are closed</p>

                <button>MAKE A RESERVATION</button>
            </div>
            <div className="box box-2">
                <h1>Drop Us a line</h1>
                <p>Don't be shy.Let us Know if you have any <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;question!</p>
                <button className="box-2-first-btn">CONTACT US</button>
                <form className="form">
                    <h1>Our Newsletter</h1>
                    <p>Dialog is very essintial part of script</p>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <button type="submit">CONTACT US</button>
                </form>
            </div>
        </div>

        <Footer/>
        </>    );
}

export default SeventhSection;