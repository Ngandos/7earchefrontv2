import { SetStateAction } from "react";
import { ArticleType } from "../context/ArticleProvider";
import { CategorieType } from "../context/CategorieProvider";
import { InputArticleData, InputAuteurData, InputCategorieData, InputEditeurData } from "../types";
import { AuteurType } from "../context/AuteursProvider";
import { EditeurType } from "../context/EditeursProvider";


export const formatArticlesDataForInput = (
    articles: ArticleType[],): InputArticleData[] =>
        articles.map((item: ArticleType) => ({
            id: item.id,
            nom: `${item.nom}`,
            ref: `${item.ref}` ,
            categorie: `${item.categorie}`,
            designation: `${item.designation}`,
            prixTTC: item.prixTTC,
        }));

export const formatCategoriesDataForInput = (
    categories: CategorieType[],): InputCategorieData[] =>
        categories.map((cat: CategorieType) => ({
            id: cat.id,
            nom: `${cat.nom}`,
            description: `${cat.description}`,
        }));

export const formatAuteursDataForInput = (
    auteurs: AuteurType[],): InputAuteurData[] =>
        auteurs.map((auteur: AuteurType) => ({
            id: auteur.id,
            nom: `${auteur.nom}`,
        }));

export const formatEditeursDataForInput = (
    editeurs: EditeurType[],): InputEditeurData[] =>
        editeurs.map((editeur: EditeurType) => ({
            id: editeur.id,
            enseigne: `${editeur.enseigne}`,
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

export const sortByRelevanceArt = (inputValue: string) => (
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

    export const sortByRelevancesCat = (inputValue: string) => (
        a: InputCategorieData, b: InputCategorieData) => {
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

    export const sortByRelevancesAut = (inputValue: string) => (
        a: InputAuteurData, b: InputAuteurData) => {
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

    export const sortByRelevancesEdi = (inputValue: string) => (
        a: InputEditeurData, b: InputEditeurData) => {
            const aIndex = a.enseigne
                .toLowerCase().indexOf((inputValue.toLowerCase()));
            const bIndex = b.enseigne
                .toLowerCase().indexOf((inputValue.toLowerCase()));
    
            if (aIndex === bIndex && inputValue.length === a.enseigne.length) {
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

