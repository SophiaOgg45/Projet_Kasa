import { NavLink } from 'react-router-dom'
import nbre from '../assets/images/404.png'; // Importez l'image

const Error = () => {
    return (
        
        <div className="error">
            <img src={nbre} alt="le nombre 404 qui indique la page en erreur" /> {/* Utilisez src au lieu de image */}
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">
                Retourner sur la page d’accueil
            </NavLink>
        </div>
    );
};

export default Error;
