import React from 'react';
import './HomeMain.css'; // Assuming you have a CSS file named HomeMain.css
function HomeMain() {
    return (
        <div className="home-main">
            <div className="home-main__content">
                <h1>Only Quilty Food</h1>
                <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolores ipsum perspiciatis saepe deserunt rerum quae nemo molestias? Blanditiis laboriosam, quas eligendi veritatis nemo natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam amet dolorem officiis accusantium. Alias maxime quae consequuntur saepe magni unde vero tenetur odio ipsam provident?</p>
                </div>
                <div className="home-main__buttons">
                    <button className="View_Menu">View Menu</button>
                    <button className="Reservation">Reservation</button>
                </div>
            </div>
        </div>
    );
}

export default HomeMain;