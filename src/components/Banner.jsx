import ImageHome from "../assets/images/ImageHome.png"
const Banner = () => {
    return (
       
        <div className= "banner">
        <img src={ImageHome} alt="Vue sur la mer depuis la plage" />
        <div className="darken-overlay"></div> {/* Ajoutez la div pour l'effet de fondu sombre */}
        <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner; 