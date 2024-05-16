import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import LogementImage from '../data/logementImage.json';
import ImageHome from "../assets/images/ImageHome.png";

const Home = () => {
    return (
        <section className="main-container">
        <div className="home">
            <div className="home-banner">
                <Banner image={ImageHome} alt="Vue sur la mer depuis la plage" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="Gallery">
                <Gallery logementImage={LogementImage} />
            </div>
        </div>
        </section>
    );
};

export default Home;

