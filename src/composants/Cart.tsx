import useCart from "../hooks/useCart";
import { useState } from "react";
import CartLineItem from "./CartLineItem";
import '../ComponentsStyles/CartStyled.css';

const Cart = () => {

    const [confirm, setConfirm] = useState<boolean>(false);

    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT })
        setConfirm(true)
    }
    console.log(Cart)

    const pageContent = confirm ? (

            <h2>Thanks for your order.</h2> 
        ) : (
                <div className="CartContent">
                    <h1 className="offScreen">Panier</h1>
                    <br/>
                    <ul className="cart">
                        {cart.map(item => {
                            return (
                                <CartLineItem
                                    key = {item.ref}
                                    item = {item}
                                    dispatch = {dispatch}
                                    REDUCER_ACTIONS = {REDUCER_ACTIONS}
                                />
                            )
                        })}
                    </ul>
                    <div className="cartTotals">
                        <p>Total des Articles de la commande : {totalItems}</p>
                        <p>Prix total de la commande : {totalPrice}</p>
                        <button className ="cartSubmit" disabled = {!totalItems} 
                            onClick = {onSubmitOrder}
                        >
                            Valider la commande
                        </button>
                    </div>
                </div>
            )

            const content = (
                <main className="main main--cart">
                    { pageContent }
                </main>
            )

    return content
}

export default Cart;