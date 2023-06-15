import { SetStateAction } from "react";
import { ArticleType } from "../context/ArticlesProvider";
import { CategorieType } from "../context/CategoriesProvider";
import { InputArticleData, InputCategorieData, InputAuteurData, InputEditeurData } from "../types";


export const formatArticlesDataForInput = (
    articles: ArticleType[],): InputArticleData[] =>
        articles.map((item: ArticleType) => ({
            id: uniqueId(),
            nom: `${item.nom}`,
            ref: `${item.ref}` ,
            categorie: `${item.categorie}`,
            designation: `${item.designation}`,
            prixTTC: `${item.prixTTC}`,
        }));

export const formatCategoriesDataForInput = (
    categories: CategorieType[],): InputCategorieData[] =>
        categories.map((cat: CategorieType) => ({
            id: uniqueId(),
            nom: `${cat.nom}`,
            descritpion: `${cat.designation}`,
        }));

export const getItemSecondaryClass = (
    lisLength: number,
    index: number,
): string => {
    if (index === 0 && index === lisLength - 1) return 'first last';
    if (index === 0) return 'first';
    if (index === lisLength - 1) return 'last';
    return '';
};

export const sortByRelevance = (inputValue: string) => (
    a: InputArticleData, b: InputArticleData) => {
        const aIndex = a.nom
            .toLowerCase().indexOf((inputValue.toLowerCase()));
        const bIndex = b.nom
            .toLowerCase().indexOf((inputValue.toLowerCase()));

        if (aIndex === bIndex && inputValue.length === a.nom.length) {
            return 0;
        }
        if (aIndex === bIndex) {
            return 0;
        }
        if (aIndex === -1) {
            return 1;
        }
        if (bIndex === -1) {
            return -1;
        }
        return aIndex - bIndex;
    };

    export function debounce(cb: SetStateAction<any>, delay = 1000) {
        let timeout: ReturnType<typeof setTimeout>;
        return (...args: string[]) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                cb(...args);
            }, delay);
        }
    }

