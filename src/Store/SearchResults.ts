import React from 'react';
import createDataContext from './CreateDataContext';
import {
  IDataContextState,
  IDataContextTypePayload,
  SearchResults,
} from './DataContextType';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
const initialState = {
  currentSearch: '',
  searchResults: {},
};
const searchReducer = (
  state: IDataContextState,
  { type, payload }: IDataContextTypePayload,
) => {
  switch (type) {
    case SET_SEARCH: {
      return {
        ...state,
        currentSearch: payload.currentSearch,
      };
    }
    case SET_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: payload.searchResults,
      };
    }
    default:
      return state;
  }
};
const setCurrentSearch =
  (dispatch: React.Dispatch<IDataContextTypePayload>) =>
  (currentSearch: string) => {
    dispatch({ type: SET_SEARCH, payload: { currentSearch } });
  };
const setSearchResults =
  (dispatch: React.Dispatch<IDataContextTypePayload>) =>
  (searchResults: SearchResults) => {
    dispatch({ type: SET_SEARCH_RESULTS, payload: { searchResults } });
  };
export const { Context, Provider } = createDataContext(
  searchReducer,
  initialState,
  { setCurrentSearch, setSearchResults },
);