import React from 'react';
import homeBackground from '../../images/home-background.png';

const HomeDetailsBanner = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${homeBackground})` }} className="text-center home-banner">
            <div className="pt-5">
                <h1 className="text-white pt-5">Apartment</h1>
            </div>
        </div>
    );
};

export default HomeDetailsBanner;