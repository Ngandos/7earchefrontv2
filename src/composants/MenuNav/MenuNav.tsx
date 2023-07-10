import './MenuNav.styled';
import NavPages from './MenuNav.styled';

const MenuNav = () => {

    return (
        <NavPages>
            <div className="navlist">
              <button className="butt"><p>Categories</p></button>
              <button className="butt"><p>Mon compte</p></button>
              <button className="butt"><p>Créer Un compte</p></button>
              <button className="butt"><p>Se connecter</p></button>
            </div>
        </NavPages>
    )
}

export default MenuNav;
