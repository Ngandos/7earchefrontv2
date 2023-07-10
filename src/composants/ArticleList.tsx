import useCart from "../hooks/useCart";
import useArticles from "../hooks/useArticle";
import { ReactElement } from "react";
import Article from "./Article";
import '../ComponentsStyles/ArticleList.css';

const ArticleList = () => {

    const { dispatch, REDUCER_ACTIONS, cart } = useCart()

    const { articles } = useArticles()

    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

    if (articles?.length) {
        pageContent = articles.map(article => {
            const inCart: boolean = cart.some(item => item.ref === article.ref)

            return (
                <Article
                    key = {article.ref}
                    article = { article }
                    dispatch = { dispatch }
                    REDUCER_ACTIONS = { REDUCER_ACTIONS }
                    inCart = { inCart }
                />
            )
        })
    }
    const content = (
        <main className="main main--articles">
            { pageContent }
        </main>
    )
    return content
}

export default ArticleList;