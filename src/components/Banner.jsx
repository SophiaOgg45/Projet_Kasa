const Banner = ({ image, alt }) => {
    return (
        <div className="banner">
            <img src={image} alt={alt} />
            <div className="darken-overlay"></div>            
        </div>
    );
};

export default Banner;
