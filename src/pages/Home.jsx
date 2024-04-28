import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import LogementImage from '../data/logementImage.json';
const Home = () => {
    return (
        <div className= "home"> 
         <Banner />    
         <div className= "Gallery">
            <Gallery LogementImage= {LogementImage}/>
     </div>
        </div>

    
    );
};

export default Home; 