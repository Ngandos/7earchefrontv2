import { ReactElement, memo } from 'react';
import { ArticleType } from '../context/ArticlesProvider';
import { ReducerActionType, ReducerAction } from '../context/CartProvider';
import '../ComponentsStyles/ArticleStyled.css';
import '../images/HuilesVegetales/huile_davocat.jpg'; 

type PropsType = {
    article: ArticleType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}

const Article = ({ article, dispatch, REDUCER_ACTIONS, inCart }: 
    PropsType): ReactElement => {

        const huile_davocat = '/src/images/HuilesVegetales/huile_davocat.jpg';
    
        const img: string = new URL(`${huile_davocat}`, import.meta.url).href

        console.log(img, huile_davocat)

        const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...article, qty: 1 }})

        const itemInCart = inCart ? ' -> Ajouté au panier: ' : null

        const content = (
            <article className='article'>
                <img src= {img} alt={ article.nom } className='articleImg'/>
                <h3>{ article.nom }</h3>
                <strong>
                    <p>
                        {new Intl.NumberFormat('fr-FR', 
                        { style: 'currency', currency: 'EUR' })
                        .format(article.prixTTC)} { itemInCart }
                    </p>
                </strong>
                <button className='CartImpl' onClick = {onAddToCart}> 
                    <p>Ajouter au Panier</p>
                </button>
            </article>
        )
    return content
}

function areArticlesEqual({ article: prevArticle, inCart: prevInCart }: PropsType, 
    { article: nextArticle, inCart: nextInCart }: PropsType) {
        return (
            Object.keys(prevArticle).every(key => {
                return (
                    prevArticle[key as keyof ArticleType] === 
                    nextArticle[key as keyof ArticleType]
                )
            }) && prevInCart === nextInCart
        )
    }

const MemorizedArticle = memo<typeof Article>(Article, areArticlesEqual)

export default MemorizedArticle;