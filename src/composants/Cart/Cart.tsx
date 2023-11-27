import useCart from "../../hooks/useCart";
import { useState } from "react";
import CartLineItem from "../CartLineItem/CartLineItem";
import '../Cart/CartStyled.css';
import axios from "axios";



const Cart = () => {

    const [confirm, setConfirm] = useState<boolean>(false);

    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

    const generateUniqueCode = () => { 
        const randomNumComm = Math.floor(Math.random() * 10000000); 
        return {randomNumComm}; 
    };

    const onSubmitOrder = async () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT });
        setConfirm(true);

        const contenu: { 
             id: number; article: number; quantite: number;
        }[] = [];

        for (let i = 0; i < cart.length; i++) {
            contenu.push({
                
                "id": i,
                "article" : cart[i].id,
                "quantite" : cart[i].qty, 
                
             })
         } 

        

        const commande = {

            contenu: contenu,
            numComm: generateUniqueCode().randomNumComm, // String
            dateComm: new Date, // Date
            status: "commande Envoyée", // String
        }

        console.log("Cart ", cart);

        // console.log("commandContent", commandeContent)

        console.log("Commande ", commande);
        
        try {
            const response = await axios.post('http://localhost:8080/demo/commande', JSON.stringify(commande), {

                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:5173',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': '*',
                },
            });
            console.log('Commande créée:', response.data, commande);
            // Successfully created the command
            // Handle success or display a success message.
        } catch (error) {
            console.error('Erreur lors de la création de la commande:', error);
            // Log the error details
            // Handle the error, possibly display an error message.
        }

        return commande; 
    };

    const pageContent = confirm ? (

        //Renvoyer contenu commande ici :
        
        <>
            <h2>Nous vous remercions pour vos achats !!!</h2>
            <br/>
            {}
        </>
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