import { 
    InputArticleData, InputAuteurData, InputCategorieData, InputEditeurData 
} from "../types";

export interface SearchResults {
    articles: InputArticleData[];
    auteurs: InputAuteurData[];
    categories: InputCategorieData[];
    editeurs: InputEditeurData[];
}

export type SearchContextState = {
    currentSearch: string;
    searchResults: SearchResults;
}

export interface IDataContextState {
    state: SearchContextState;
}

export interface IDataContextTypePayload {
    type: string;
    payload: Partial<SearchContextState>;
}

export interface ISearchContext extends IDataContextState {
    setCurrentSearch: (currentSearch: string) => void;
    setSearchResults: (SearchResults: SearchResults) => void;
}