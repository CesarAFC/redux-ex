import { ADD_TO_CART, CLEAR_CART, CLOSE_ALERT, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types";

export const initlaState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "Product 1 description",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      description: "Product 2 description",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      description: "Product 3 description",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      description: "Product 4 description",
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      description: "Product 5 description",
    },
    {
      id: 6,
      name: "Product 6",
      price: 600,
      description: "Product 6 description",
    },
    {
      id: 7,
      name: "Product 7",
      price: 700,
      description: "Product 7 description",
    },
    {
      id: 8,
      name: "Product 8",
      price: 800,
      description: "Product 8 description",
    },
    {
      id: 9,
      name: "Product 9",
      price: 900,
      description: "Product 9 description",
    },
  ],
  cart: [],
  alert: false,
};

export const shoppingReducer = (state = initlaState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
          let newItem = state.products.find(
            (product) => product.id === action.payload
          );
          let itemInCart = state.cart.find( item => item.id === newItem.id);

          return itemInCart ? { 
            ...state, 
            cart: state.cart.map(item => item.id === newItem.id ? {...item, quantity: item.quantity+1} : item),
            alert: true, 
        } : { 
            ...state, 
            cart: [...state.cart, {...newItem, quantity: 1}],
            alert: true,  
        };
        }

        case REMOVE_ONE_FROM_CART:{
                let itemToDelete = state.cart.find( i => i.id === action.payload);

            return itemToDelete.quantity > 1
              ? {
                  ...state,
                  cart: state.cart.map((item) =>
                    item.id === action.payload
                      ? { ...item, quantity: item.quantity - 1 }
                      : item
                  ),
                }
              : {
                  ...state,
                  cart: state.cart.filter((item) => item.id !== action.payload),
                };
        }

        case REMOVE_ALL_FROM_CART:{
            return {...state, cart: state.cart.filter( item => item.id !== action.payload )};
        }

        case CLEAR_CART:
            return { ...state, cart: [] };
        case CLOSE_ALERT:
            return { ...state, alert: false };

        default:
            // throw Error('Unknown action: ' + action.type);
            return state;
    }
}