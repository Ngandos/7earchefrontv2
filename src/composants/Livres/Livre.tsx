import { ReactElement, memo } from 'react';
import { LivreType } from '../../context/LivreProvider';
import { ReducerActionType, ReducerAction } from '../../context/CartProvider';
import './ArticleStyled.css';

type PropsType = {
    livre: LivreType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}

const Livre = ({ livre, dispatch, REDUCER_ACTIONS, inCart }: 
    PropsType): ReactElement => {
    
        const img: string = new URL(`/src/images/ArticlesLivres/${livre.titre}.jpg`, import.meta.url).href


        const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...livre, qty: 1 }})

        const itemInCart = inCart ? ' -> Ajouté au panier: ' : null

        const content = (
            <article className='article'>
                <h5>{ livre.titre }</h5>
                <img src= {img} alt={ livre.titre } className='articleImg'/>
                <strong>
                    <p>
                        {new Intl.NumberFormat('fr-FR', 
                        { style: 'currency', currency: 'EUR' })
                        .format(livre.prixTTC)} { itemInCart }
                    </p>
                </strong>
                <button className='CartImpl' onClick = {onAddToCart}> 
                    <p>Ajouter au Panier</p>
                </button>
            </article>
        )
    return content
}

function areLivresEqual({ livre: prevlivre, inCart: prevInCart }: PropsType, 
    { livre: nextlivre, inCart: nextInCart }: PropsType) {
        return (
            Object.keys(prevlivre).every(key => {
                return (
                    prevlivre[key as keyof LivreType] === 
                    nextlivre[key as keyof LivreType]
                )
            }) && prevInCart === nextInCart
        )
    }

const MemorizedLivre = memo<typeof Livre>(Livre, areLivresEqual)

export default MemorizedLivre;