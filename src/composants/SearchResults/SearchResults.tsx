// Import necessary dependencies and types
import React from 'react';
import { ArticleType } from "../../context/ArticleProvider";
import { LivreType } from "../../context/LivreProvider";
import { SearchResultsContainer } from "./SearchResults.styled";

type PropsType = {
  article: ArticleType;
  id: number;
  ref: string;
  categorie: string;
  prixHT: number;
  prixTTC: number;
  tva: number;
  designation: string;
};

type LivreProps = {
  livre: LivreType;
  id: number;
  titre: string;
  auteur: string;
  nom: string;
  editeur: string;
  isbn: string;
};

type SearchResultsProps = {
  articles: PropsType[];
  livres: LivreProps[];
};

const SearchResults: React.FC<SearchResultsProps> = ({ articles, livres }) => {

  return (
    <SearchResultsContainer>
      <div>
        {articles?.map((article: PropsType) => (
          <div key={article.id}>
            <p>{article.categorie}</p>
          </div>
        ))}
      </div>
      <div>
        {livres?.map((livre: LivreProps) => (
          <div key={livre.id}>
            <p>{livre.titre}</p>
            <p>{livre.auteur}</p>
            <p>{livre.editeur}</p>
            <p>{livre.isbn}</p>
          </div>
        ))}
      </div>
    </SearchResultsContainer>
  );
};

export default SearchResults;
