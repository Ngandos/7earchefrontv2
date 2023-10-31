import { ChangeEvent, ReactElement, memo } from "react";
import "./CartLineItem.css";
import '../../images/HuilesVegetales/huile_davocat.jpg';
import { CartItemType, ReducerAction, ReducerActionType } from "../../context/CartProvider";

type PropsType = {
    item: CartItemType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
}

const CartLineItem = ( { item, dispatch, REDUCER_ACTIONS }: PropsType) => {

    const img: string = new URL(`/src/images/ArticlesLivres/${item.designation}.jpg`, import.meta.url).href

    const lineTotal: number = (item.qty * item.prixTTC)

    const highestQty: number = 20 > item.qty ? 20 : item.qty
    
    const optionValues: number[] = [ ...Array(highestQty).keys()].map(i => i + 1)

    const options: ReactElement[] = optionValues.map(val => {

        return <option key = { `ops${val}` } value = {val}>
                    {val}
                </option>
    })

    const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY,
            payload: { ...item, qty: Number(e.target.value)}
        })
    }

    const onRemoveFromCart = () => dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: item, 
    })

    const content = (
        <ul className="cartItemContainer">
            <li className = "cartItem">
                <img src = {img} alt = {item.nom} className="cartImg"/>
                <div className="CartItemDatas">
                    <div aria-label = "item Name">
                        <h3>{ item.designation }</h3>
                    </div>
                    <div aria-label = "Price Per Item" className="price">
                        <strong>Prix unitaire : </strong>
                        { new Intl.NumberFormat('fr-FR', 
                        {style: 'currency', currency: 'EUR'})
                        .format(item.prixTTC)}
                    </div>
                    <div className="CartManager">
                        <label htmlFor="itemQty" className="offscreen">
                            <strong>Quantité</strong>
                        </label>
                        <br/>
                        <select 
                            name = "itemQty" 
                            id = "itemQty" 
                            className="cartSelect" 
                            value = {item.qty}
                            aria-label = "Item Quantity"
                            onChange = {onChangeQty}
                        >
                            {options}    
                        </select>
                    </div>
                    <div className="cartItemSubTotal" arial-label = "Line Item Subtotal">
                        { 
                            new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'})
                            .format(lineTotal)
                        }
                    </div>
                    <button 
                        className="cartButton" 
                        aria-label = "Remove Item From Cart" 
                        title = "Remove Item From Cart"
                        onClick = {onRemoveFromCart}
                        >Retirer L'article
                    </button>
                </div>
            </li>
        </ul>
    )

    console.log(img)

    return (
        content
    )
}

function areItemsEqual({ item: prevItem }: PropsType, { item: nextItem }: PropsType) {
    return Object.keys(prevItem).every(key => {
        return (
            prevItem[key as keyof CartItemType] === nextItem [key as keyof CartItemType]
        )
    })
}

const MemorizedCartLineItem = memo<typeof CartLineItem>(CartLineItem, areItemsEqual)

export default MemorizedCartLineItem;