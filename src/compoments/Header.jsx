import LOGO from "../assets/images/LOGO.png"
const Header = () => {
    return (
        <div className="header">
            <img src={LOGO} alt="logo kasa" />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header; 