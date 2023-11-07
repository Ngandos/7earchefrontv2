import { useMemo, useReducer, createContext, ReactElement } from 'react';

export type CartItemType = {
  id: number;
  ref: string;
  categorie: string;
  prixHT: number;
  prixTTC: number;
  tva: number;
  designation: string;
  qty: number;
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  QUANTITY: 'QUANTITY',
  SUBMIT: 'SUBMIT',
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction,
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD:
      {
        if (!action.payload) {
          throw new Error('action.payload missing in ADD action');
        }
        const { id, ref, categorie, prixHT, prixTTC, tva, designation } =
          action.payload;

        const filteredCart: CartItemType[] = state.cart.filter(
          (item) => item.ref != ref,
        );

        const itemExists: CartItemType | undefined = state.cart.find(
          (item) => item.ref === ref,
        );

        const qty: number = itemExists ? itemExists.qty + 1 : 1;

        return {
          ...state,
          cart: [
            ...filteredCart,
            { id, ref, categorie, prixHT, prixTTC, tva, designation, qty },
          ],
        };
      }
      break;
    case REDUCER_ACTION_TYPE.REMOVE:
      {
        if (!action.payload) {
          throw new Error('action.payload missing in REMOVE action');
        }
        const { ref } = action.payload;

        const filteredCart: CartItemType[] = state.cart.filter(
          (item) => item.ref != ref,
        );

        return { ...state, cart: [...filteredCart] };
      }
      break;
    case REDUCER_ACTION_TYPE.QUANTITY:
      {
        if (!action.payload) {
          throw new Error('action.payload missing in QUANTITY action');
        }
        const { ref, qty } = action.payload;

        const itemExists: CartItemType | undefined = state.cart.find(
          (item) => item.ref === ref,
        );
        if (!itemExists) {
          throw new Error('Item must exist in order to update quantity');
        }
        const updatedItem: CartItemType = { ...itemExists, qty };

        const filteredCart: CartItemType[] = state.cart.filter(
          (item) => item.ref != ref,
        );
        return { ...state, cart: [...filteredCart, updatedItem] };
      }
      break;
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }

    default:
      throw new Error('Unidentified reducer action type');
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalItems = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.qty;
  }, 0);

  const totalPrice = new Intl.NumberFormat('fr-fr', {
    style: 'currency',
    currency: 'EUR',
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.qty * cartItem.prixHT;
    }, 0),
  );

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.ref.slice(-4));
    const itemB = Number(b.ref.slice(-4));
    return itemA - itemB;
  });

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {
    ('');
  },
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: '',
  cart: [],
};

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
