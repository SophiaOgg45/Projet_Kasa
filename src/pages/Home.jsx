import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import LogementImage from '../data/logementImage.json';
import ImageHome from "../assets/images/ImageHome.png";

const Home = () => {
    return (
        <div className="home"> 
            <Banner image={ImageHome} alt="Vue sur la mer depuis la plage" />    
            <div className="Gallery">
                <Gallery LogementImage={LogementImage} />
            </div>
        </div>
    );
};

export default Home;
