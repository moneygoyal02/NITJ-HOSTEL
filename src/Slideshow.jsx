import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import image1 from '../src/hostel-7.jpeg';
import image2 from '../src/mgh.png';
import image3 from '../src/mbh.jpeg'
import image4 from '../src/nitj.png';
import image5 from '../src/mega-hostel-boys.jpg';
const images = [
    image4,
    image1,
    image2,
    image3,
    image5
];

const Slideshows = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow-container">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
        </div>
    );
}

export default Slideshows;

