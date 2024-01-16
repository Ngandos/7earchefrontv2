// Import necessary dependencies and types
import React from 'react';
import { ArticleType } from "../../context/ArticleProvider";
import { SearchResultsContainer } from "./SearchResults.styled";

type ArticleProps = {
  article: ArticleType;
  id: number;
  ref: string;
  categorie: string;
  prixHT: number;
  prixTTC: number;
  tva: number;
  designation: string;
};

type SearchResultsProps = {
  articles: ArticleProps[];
};

const SearchResults: React.FC<SearchResultsProps> = ({ articles }) => {

  return (
    <SearchResultsContainer>
      <div className='ResComp'>
        {articles?.map((article: ArticleProps) => (
          <div key={article.id}>
            <p>{article.designation}</p>
          </div>
        ))}
      </div>
    </SearchResultsContainer>
  );
};

export default SearchResults;
