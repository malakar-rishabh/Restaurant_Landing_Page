import React from 'react';
import './SixthSection.css';
// import image from './image.jpg'; // Assuming you have an image in your project
import image from './Images/block-img-1.jpg'

function SixthSection() {
    return (
        <div className="main-container">
            <div className="heading">
                <h3>DON'T MISS</h3>
                <h1>Our News And Events</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card-container">
                {Array(3).fill().map((_, i) => (
                    <div key={i} className="card">
                        <img src={image} alt="Product" />
                        <h3>Produt</h3>
                        <p className="category">CATEGORY</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nihil natus repudiandae perferendis tempore fugit fugiat dolorem et molestiae nostrum?</p>
                    </div>
                ))}
            </div>
            <button className="centered-button">View More</button>
        </div>
    );
}

export default SixthSection;