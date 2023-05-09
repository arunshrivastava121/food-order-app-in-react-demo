import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (previousState, action) => {
  if(action.type === 'ADD') {
    const updatedTotalAmount = previousState.totalAmount + action.item.price * action.item.amount;

    const findingExistingItemIndex = previousState.items.findIndex(item => item.id === action.item.id);
    const existingItem = previousState.items[findingExistingItemIndex];
    let updatedItems;

    if(existingItem){
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount
      };

      updatedItems = [...previousState.items];
      updatedItems[findingExistingItemIndex] = updatedItem;
    }else {
      updatedItems = previousState.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  if(action.type === 'REMOVE'){
    const findingExistingItemIndex = previousState.items.findIndex(item => item.id === action.id);
    const existingItem = previousState.items[findingExistingItemIndex];
    const updatedTotalAmount = previousState.totalAmount - existingItem.price;
    let updatedItems;

    if(existingItem.amount === 1){
      updatedItems = previousState.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1
      };
      updatedItems = [...previousState.items];
      updatedItems[findingExistingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  };

  return defaultCartState;
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };
  
  const removeItemHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };

  return(
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;