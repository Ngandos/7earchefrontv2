// Search.ts
import { ArticleType } from '../../context/ArticleProvider';
import { LivreType } from '../../context/LivreProvider';

function searchByTitleOrDesignation(
    query: string,
    articles: ArticleType[] | null | undefined,
    livres: LivreType[] | null | undefined
) : (ArticleType | LivreType)[] {
    console.log('Query:', query);
    if (!articles || !livres) {
        // Handle the case where articles or livres are null or undefined
        return [];
    }

    const lowercaseQuery = query.toLowerCase();

    const articleResults = articles.filter((article) =>
        article.categorie.toLowerCase().includes(lowercaseQuery)
    );

    const livreResults = livres.filter((livre) =>
        livre.titre.toLowerCase().includes(lowercaseQuery)
    );

    return [...articleResults, ...livreResults];
}

export default searchByTitleOrDesignation;

