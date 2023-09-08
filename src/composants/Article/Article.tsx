import { ReactElement, memo } from 'react';
import { ArticleType } from '../../context/ArticleProvider';
import { ReducerActionType, ReducerAction } from '../../context/CartProvider';
import '../ComponentsStyles/ArticleStyled.css';
import '../images/HuilesVegetales/huile_davocat.jpg';

type PropsType = {
	article: ArticleType;
	dispatch: React.Dispatch<ReducerAction>;
	REDUCER_ACTIONS: ReducerActionType;
	inCart: boolean;
};

const Article = ({
	article,
	dispatch,
	REDUCER_ACTIONS,
	inCart,
}: PropsType): ReactElement => {
	const img: string = new URL(
		`/src/images/ArticlesLivres/${article.designation}.jpg`,
		import.meta.url
	).href;

	const onAddToCart = () =>
		dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...article, qty: 1 } });

	const itemInCart = inCart ? ' -> Ajouté au panier: ' : null;

	const content = (
		<article className='article'>
			<h5>{article.designation}</h5>
			<img src={img} alt={article.designation} className='articleImg' />
			<strong>
				<p>
					{new Intl.NumberFormat('fr-FR', {
						style: 'currency',
						currency: 'EUR',
					}).format(article.prixTTC)}{' '}
					{itemInCart}
				</p>
			</strong>
			<button className='CartImpl' onClick={onAddToCart}>
				<p>Ajouter au Panier</p>
			</button>
		</article>
	);
	return content;
};

function areArticlesEqual(
	{ article: prevArticle, inCart: prevInCart }: PropsType,
	{ article: nextArticle, inCart: nextInCart }: PropsType
) {
	return (
		Object.keys(prevArticle).every((key) => {
			return (
				prevArticle[key as keyof ArticleType] ===
				nextArticle[key as keyof ArticleType]
			);
		}) && prevInCart === nextInCart
	);
}

const MemorizedArticle = memo<typeof Article>(Article, areArticlesEqual);

export default MemorizedArticle;
