import PropTypes from "prop-types";
const Gallery = ({ LogementImage }) => {
    return (
        LogementImage.map((img) => (
            <div className="gallery" key={img.id}>
                <img src={img.cover} alt={img.title} />
                <h3>{img.title}</h3>
            </div>
        ))
    );

};
Gallery.protoTypes = {
    LogementImage: PropTypes.array.isRequired
};

export default Gallery; 