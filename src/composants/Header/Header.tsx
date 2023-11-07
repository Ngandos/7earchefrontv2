import Nav from '../Nav/Nav';
import useCart from '../../hooks/useCart';
import './Header.styled.css'
import '../../images/ID.Visuelle/CinemaBandeauCouleur.jpeg';
import { Link } from 'react-router-dom';


type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({viewCart, setViewCart}: PropsType) => {

    const { totalItems, totalPrice } = useCart()

    const content = (
        <header className="header">
            <div className="headerTitleBar">
                <Link to="/">
                    <h1 className='headTitle'>7éArche</h1>
                </Link>
            </div>
            <div className="headerPriceBox">
                <p>Total Articles : { totalItems }</p>
                <p>Prix Total : { totalPrice }</p>
                <Nav viewCart = { viewCart } setViewCart = { setViewCart } />
            </div>
        </header>
    )
    return content
}

export default Header;