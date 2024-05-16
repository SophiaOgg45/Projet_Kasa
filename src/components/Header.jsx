import { NavLink } from "react-router-dom";
import LOGO from "../assets/images/LOGO.png"

const Header = () => {
    return (
        <section className="main-container">
        <div className="header">
            <img src={LOGO} alt="logo kasa" />
            <nav>
                <ul>
                    <NavLink to ="/" className={({isActive})=> (isActive ? "underline" : "")}>
                    <li>Accueil</li>
                    </NavLink>
                    <NavLink to= "/About" className={({isActive})=> (isActive ? "underline" : "")}>
                    <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
        </section>
    );
};

export default Header; 

