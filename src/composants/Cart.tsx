import useCart from "../hooks/useCart";
import { useState } from "react";
import CartLineItem from "./CartLineItem";
import '../ComponentsStyles/CartStyled.css';
import axios from "axios";

const Cart = () => {

    const [confirm, setConfirm] = useState<boolean>(false);

    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

    const generateUniqueCode = () => { 
        const randomNumComm = Math.floor(Math.random() * 10000000); 
        return {randomNumComm}; 
    };

    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT })
        setConfirm(true)

        const commande = {
            numComm: generateUniqueCode(),
            dateComm: new Date(),
            lignesCommande: cart.map(item => ({
              quantite: item.qty,
              article: item
               //article: { id: item.id }
            }))
        };
          
        axios.post('http://localhost:8080/commande/creerCommande', commande)
        .then((response) => {
            console.log('Commande créée:', response.data, commande);
        //  toast.success('Commande passée avec succès');
        })
        .catch(error => {
            console.error('Erreur lors de la création de la commande:', error);
        //  toast.error('Erreur lors de la création de la commande');
        });   
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
                            <p>Valider la commande</p>
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