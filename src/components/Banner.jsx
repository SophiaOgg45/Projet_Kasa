
const Banner = ({ image, alt }) => {
    return (
        <div className="banner">
            <img src={image} alt={alt} />
            <div className="darken-overlay"></div> {/* Ajoutez la div pour l'effet de fondu sombre */}
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;
