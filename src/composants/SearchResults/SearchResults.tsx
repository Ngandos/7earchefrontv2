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

const SearchResults = ({ Articles, Livres }: { Articles: PropsType[]; Livres: LivreProps[] }) => {
    return (
        <SearchResultsContainer>
            <div>
                {Articles?.map((article: PropsType) => (
                    <tr key={article.id}>
                        <td>{article.designation}</td>
                    </tr>
                ))}
            </div>
            <div>
                {Livres?.map((livre: LivreProps) => (
                    <tr key={livre.id}>
                        <td>{livre.titre}</td>
                    </tr>
                ))}
            </div>
        </SearchResultsContainer>
    );
};

export default SearchResults;
