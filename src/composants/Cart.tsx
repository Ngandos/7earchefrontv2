import useCart from "../hooks/useCart";
import { useState } from "react";
import CartLineItem from "./CartLineItem";
import '../ComponentsStyles/CartStyled.css'

const Cart = () => {

    const [confirm, setConfirm] = useState<boolean>(false);

    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT })
        setConfirm(true)
    }

    const pageContent = confirm ? (
            <h2>Thanks for your order.</h2> 
        ) : (
                <div className="CartContent">
                    <h1 className="offScreen">Panier</h1>
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
                        <p>Total Articles: {totalItems}</p>
                        <p>Total Prices: {totalPrice}</p>
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