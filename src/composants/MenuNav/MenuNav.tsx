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
          Mon compte
        </Link>
        <Link className='butt' to='/créerUnCompte'>
          Créer un compte
        </Link>
        <Link className='butt' to='/connexion'>
          Se connecter
        </Link>
        <Link className='butt' to='/cart'>
          Voir le panier
        </Link>
      </div>
    </NavPages>
  );
};

export default MenuNav;

