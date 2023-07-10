/* eslint-disable @typescript-eslint/no-explicit-any */

import { useReducer, createContext, useMemo, Reducer } from 'react';
import { SearchContextState, ISearchContext } from './DataContextType';
type ContextTypes = ISearchContext | any;
type InitialStateTypes = SearchContextState | any;

// eslint-disable-next-line react-refresh/only-export-components
export default (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reducer: Reducer<any, any>,
  initialState: InitialStateTypes,
  actions: any,
) => {
  const Context = createContext({} as ContextTypes);
  function Provider({ children }: any) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions: any = useMemo(() => ({}), []);
    // eslint-disable-next-line
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    const contextValue = useMemo(
      () => ({ state, ...boundActions }),
      [state, boundActions],
    );
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
  }
  return { Context, Provider };
};