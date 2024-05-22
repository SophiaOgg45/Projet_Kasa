import React, { useState } from "react";
import ArrowLeft from '../assets/images/ArrowLeft.png';
import ArrowRight from '../assets/images/ArrowRight.png';

const Carousel = ({ pictures, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-navigation">
                <img src={ArrowLeft} alt="Previous" onClick={goToPrevious} />
                <img src={ArrowRight} alt="Next" onClick={goToNext} />
            </div>
            <img src={pictures[currentIndex]} alt={title} />
            <div className="carousel-counter">
                {currentIndex + 1}/{pictures.length}
            </div>
        </div>
    );
};

export default Carousel;

