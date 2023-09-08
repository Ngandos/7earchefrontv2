import useCart from '../../hooks/useCart';
import './FooterStyled.css';

type PropsType = {
	viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
	const { totalItems, totalPrice } = useCart();

	const year: number = new Date().getFullYear();

	const pageContent = viewCart ? (
		<p>Shopping Cart &copy; {year}</p>
	) : (
		<>
			<p>Nombre D'articles : {totalItems}</p>
			<p>Prix Total : {totalPrice}</p>
			<p>7eArche Template performed by Wakanda Developpement</p>
		</>
	);

	const content = (
		<footer className='footer'>
			<section className='footMain'>
				<aside className='footOne'>{pageContent}</aside>
				<aside className='footTwo'>
					<h2>7eArche-Online-Shopping-Cart &copy; {year}</h2>
				</aside>
			</section>
		</footer>
	);
	return content;
};

export default Footer;

