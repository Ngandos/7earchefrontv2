import Nav from './Nav';
import useCart from '../hooks/useCart';
import '../ComponentsStyles/Header.styled.css'
import '../images/ID.Visuelle/CinemaBandeauCouleur.jpeg';

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({viewCart, setViewCart}: PropsType) => {

    const { totalItems, totalPrice } = useCart()

    const img: string = new URL(`/src/images/ID.Visuelle/${'CinemaBandeauCouleur'}.jpeg`, import.meta.url).href

    const content = (
        <header className="header">
            <div className="headerTitleBar">
                <img src= {img} alt={ 'CinemaBandeauCouleur' } className='articleImg'/>
                <h1 className='headTitle'>7éArche</h1>
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