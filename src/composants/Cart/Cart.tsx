import useCart from "../../hooks/useCart";
import { useState } from "react";
import CartLineItem from "../CartLineItem/CartLineItem";
import '../Cart/CartStyled.css';
import axios from "axios";

const Cart = () => {
    const [confirm, setConfirm] = useState<boolean>(false);
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();
    const [commande, setCommande] = useState<{
        contenu: { id: number; article: number; quantite: number }[];
        numComm: number;
        dateComm: string;
        status: string;
    } | null>(null);

    const generateUniqueCode = () => {
        const randomNumComm = Math.floor(Math.random() * 10000000);
        return { randomNumComm };
    };

    const onSubmitOrder = async () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT });
        setConfirm(true);

        const contenu = cart.map((item, index) => ({
            id: index,
            article: item.id,
            quantite: item.qty,
        }));

        const newCommande = {
            contenu: contenu,
            numComm: generateUniqueCode().randomNumComm,
            dateComm: new Date().toISOString(), // Format date as string
            status: "commande Envoyée",
        };

        console.log("Commande ", newCommande);

        try {
            const response = await axios.post('http://localhost:8080/demo/commande', JSON.stringify(newCommande), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:5173',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': '*',
                },
            });

            console.log('Commande créée:', response.data, newCommande);
            // Successfully created the command
            // Set the created command to state
            setCommande(newCommande);
        } catch (error) {
            console.error('Erreur lors de la création de la commande:', error);
            // Log the error details
            // Handle the error, possibly display an error message.
        }
    };

    const renderConfirmation = () => {
        if (confirm && commande) {
            return (
                <>
                    <h2>Nous vous remercions pour vos achats !!!</h2>
                    <p>Date de la commande: {commande.dateComm}</p>
                    <p>Numéro de commande: {commande.numComm}</p>
                    {commande.contenu.map(item => (
                        <div key={item.id}>
                            <p>ID: {item.id}</p>
                            <p>Article: {item.article}</p>
                            <p>Quantite: {item.quantite}</p>
                        </div>
                    ))}
                    <p>Statut de la commande: {commande.status}</p>
                </>
            );
        }
        return null;
    };
    

    const content = (
        <main className="main main--cart">
            {confirm ? renderConfirmation() : (
                <div className="CartContent">
                    <h1 className="offScreen">Panier</h1>
                    <br />
                    <ul className="cart">
                        {cart.map(item => (
                            <CartLineItem
                                key={item.id}
                                item={item}
                                dispatch={dispatch}
                                REDUCER_ACTIONS={REDUCER_ACTIONS}
                            />
                        ))}
                    </ul>
                    <div className="cartTotals">
                        <p>Total des Articles de la commande : {totalItems}</p>
                        <p>Prix total de la commande : {totalPrice}</p>
                        <button className="cartSubmit" disabled={!totalItems} onClick={onSubmitOrder}>
                            <p>Valider la commande</p>
                        </button>
                    </div>
                </div>
            )}
        </main>
    );

    return content;
}

export default Cart;
