import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ArrowLeft from '../assets/images/ArrowLeft.png';
import ArrowRight from '../assets/images/ArrowRight.png';
import logementImage from "../data/logementImage.json";

const findLogementByID = (id) => {
    return logementImage.find((logement) => logement.id === id);
};

const Logements = () => {
    const { id } = useParams();
    const logement = findLogementByID(id);
    const pictures = logement.pictures;
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    };

    return (

        <div className="logement">
            <img src={pictures[currentIndex]} alt={logement.title} />
            <div className="carousel-navigation">
                <img src={ArrowLeft} alt="Previous" onClick={goToPrevious} />
                <img src={ArrowRight} alt="Next" onClick={goToNext} />
            </div>
            <div>
                <p>Logement : {id}</p>
                <p>Le titre du logement : {logement.title}</p>
                <p>La description du logement : {logement.description}</p>
            </div>
        </div>
    );
};

export default Logements;

