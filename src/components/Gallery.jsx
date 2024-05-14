import PropTypes from "prop-types";
import {Link} from "react-router-dom";
const Gallery = ({ logementImage }) => {
    return (
        logementImage.map((img) => (
            <Link to={`/logement/${img.id}`} className="gallery" key={img.id}>
                <img src={img.cover} alt={img.title} />
                <h3>{img.title}</h3>
            </Link>
        ))
    );

};
Gallery.propTypes = {
    logementImage: PropTypes.array.isRequired
};

export default Gallery; 