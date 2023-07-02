import Articlepage from "./ArticlePage.syled";
import { ReactElement } from 'react';
import { ArticleType } from '../../../context/ArticlesProvider';
import { ReducerActionType, ReducerAction } from '../../../context/CartProvider';
import '../../../ComponentsStyles/ArticleStyled.css';
import '../../../images/HuilesVegetales/huile_davocat.jpg'; 

type PropsType = {
    article: ArticleType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}


const ArticlePage = ({ article, dispatch, REDUCER_ACTIONS, inCart }: 
    PropsType): ReactElement => {

        const huile_davocat = '/src/images/HuilesVegetales/huile_davocat.jpg';
    
        const img: string = new URL(`${huile_davocat}`, import.meta.url).href

        console.log(img, huile_davocat)

        const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...article, qty: 1 }})

        const itemInCart = inCart ? ' -> Ajouté au panier: ' : null

    return (
        <Articlepage>
            <div className="Title">
                <h2>{article.nom}</h2>
            </div>
            <aside>
                <div className="pict">
                    <img src= {img} alt={ article.nom } className='articleImg'/>
                </div>
                <div className="Details">
                    <h2>Article : {article.nom}</h2>
                    <p>PrixHT : {article.prixHT}</p>
                    <p>tva : {article.tva}</p>
                    <p>
                        {new Intl.NumberFormat('fr-FR', 
                        { style: 'currency', currency: 'EUR' })
                        .format(article.prixTTC)} { itemInCart }
                    </p>
                </div>
            </aside>
            <aside>
                <div className="desc">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Ratione, exercitationem. Obcaecati, quia similique quasi autem, 
                        nemo voluptate magni iste nulla eum magnam soluta! 
                        Qui animi repellat laborum velit nemo cupiditate.
                    </p>
                </div>
                <button className='CartImpl' onClick = {onAddToCart}> 
                    <p>Ajouter au Panier</p>
                </button>
            </aside>
        </Articlepage>
    )
}

export default ArticlePage;