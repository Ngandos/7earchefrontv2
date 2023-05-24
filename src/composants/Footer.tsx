import useCart from "../hooks/useCart";
import '../ComponentsStyles/FooterStyled.css';

type PropsType = {
    viewCart: boolean,
}

const Footer = ( { viewCart }: PropsType ) => {
    const { totalItems, totalPrice } = useCart()

    const year: number = new Date().getFullYear()

    const pageContent = viewCart? 
        <p>Shopping Cart &copy; {year}</p>
        : (
            <>
                <p>Nombre D'articles : { totalItems }</p>
                <p>Prix Total : { totalPrice }</p>
                <p>Congo-b-Exchange-OnlineShop &copy; {year}</p>
            </>
        )

    const content = (
        <footer className = "footer">
            <section className="footMain">
                <aside className="footOne">
                    {pageContent}
                </aside>
                <aside className="footTwo">
                    <h2>Congo-b-Exchange template</h2>
                </aside>
            </section>
        </footer>
    )
    return content
}

export default Footer;