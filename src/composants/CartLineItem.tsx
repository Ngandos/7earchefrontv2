import { ChangeEvent, ReactElement, memo } from "react";
import "./ComponentsStyles/CartLineItem.css"
import { CartItemType, ReducerAction, ReducerActionType } from "../context/CartProvider";

type PropsType = {
    item: CartItemType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
}

const CartLineItem = ( { item, dispatch, REDUCER_ACTIONS }: PropsType) => {

    const huile_davocat = '/src/images/HuilesVegetales/huile_davocat.jpg';

    const img: string = new URL(`${huile_davocat}`, import.meta.url).href

    const lineTotal: number = (item.qty * item.prix)

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
                <img src = {img} alt = {item.name} className="cartImg"/>
                <div aria-label = "item Name">
                    { item.name }
                </div>
                <div aria-label = "Price Per Item">
                    { new Intl.NumberFormat('fr-FR', 
                    {style: 'currency', currency: 'EUR'})
                    .format(item.prix)}
                </div>
                <div className="CartManager">
                    <label htmlFor="itemQty" className="offscreen">
                        Quantité
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
                <button className="cartButton" 
                        aria-label = "Remove Item From Cart" 
                        title = "Remove Item From Cart"
                        onClick = {onRemoveFromCart}
                >X</button>
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