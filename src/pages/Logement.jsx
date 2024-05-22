import React from "react";
import { useParams } from "react-router-dom";
import logementImage from "../data/logementImage.json";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Error from "../pages/Error"; 

const findLogementByID = (id) => {
    return logementImage.find((logement) => logement.id === id);
};

const Logements = () => {
    const { id } = useParams();
    const logement = findLogementByID(id);

    // Si l'ID de la location est différent/inexistant, on affiche la page d'erreur
    if (!logement) {
        return <Error />;
    }

    const description = logement.description;
    const equipments = logement.equipments;
    const tags = logement.tags;
    const host = logement.host;

    return (
        <section className="main-container">
        <div className="logement">
            <Carousel pictures={logement.pictures} title={logement.title} />
            <div className="InfoLogement">
                <div className='logement-host'>
                    <p className="title">{logement.title}</p>
                    <div className="host">
                        <p>{host.name}</p>
                        {host.picture && <img src={host.picture} alt="Portrait du propriétaire" />}
                    </div>
                </div>
                <p className="location">{logement.location}</p>
                <div className="tags-container">
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                    <div className="Rating">
                        <Rating value = {logement.rating} />
                    </div>
                </div>
            </div>
            <div className="content">
                <Collapse
                    title="Description"
                    content={<div className="description">{description}</div>}
                />
                <div className="space-between"></div>
                <Collapse
                    title="Equipements"
                    content={
                        <div className="equipment-list">
                            {equipments.map((equipment, index) => (
                                <div key={index} className="equipment">{equipment}</div>
                            ))}
                        </div>
                    }
                />
            </div>
        </div>
        </section>
    );
};

export default Logements;


