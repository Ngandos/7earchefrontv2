import { Link } from 'react-router-dom';
import './MenuNav.styled';
import NavPages from './MenuNav.styled';

const MenuNav = () => {
  
  return (
        <NavPages>
            <div className='navlist'>
                <Link className='butt' to='/categorie'>
                    Categories
                </Link>
                <Link className='butt' to='/monCompte'>
                    Mon Compte
                </Link>
                <Link className='butt' to='/créerUnCompte'>
                    Créer un Compte
                </Link>
                <Link className='butt' to='/connexion'>
                    Se Connecter
                </Link>
                <Link className='butt' to='/cart'>
                    Voir le Panier
                </Link>
            </div>
        </NavPages>
    );
};

export default MenuNav;

