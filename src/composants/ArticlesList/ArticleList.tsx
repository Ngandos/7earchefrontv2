import useCart from "../../hooks/useCart";
import useArticles from "../../hooks/useArticle";
import { ReactElement } from "react";
import Article from "../Article/Article";
import '../ArticlesList/ArticleList.css';

const ArticleList = () => {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart();
    const { articles, loading, error } = useArticles();

    if (loading) {
        return <p>Loading articles...</p>;
    }

    if (error) {
        return <p>Error loading articles: {error.message}</p>;
    }

    const pageContent: ReactElement | ReactElement[] = articles?.map(article => {
        const inCart: boolean = cart.some(item => item.ref === article.ref);

        return (
            <Article
                key={article.ref}
                article={article}
                dispatch={dispatch}
                REDUCER_ACTIONS={REDUCER_ACTIONS}
                inCart={inCart}
            />
        );
    }) || <p>No articles available.</p>;

    return (
        <main className="main main--articles">
            {pageContent}
        </main>
    );
};

export default ArticleList;
