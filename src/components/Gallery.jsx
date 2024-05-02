import PropTypes from "prop-types";
import {Link} from "react-router-dom";
const Gallery = ({ LogementImage }) => {
    return (
        LogementImage.map((img) => (
            <Link to={`/logement/${img.id}`} className="gallery" key={img.id}>
                <img src={img.cover} alt={img.title} />
                <h3>{img.title}</h3>
            </Link>
        ))
    );

};
Gallery.protoTypes = {
    LogementImage: PropTypes.array.isRequired
};

export default Gallery; 