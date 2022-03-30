import React, { useContext } from 'react';
import { Store } from '../Store';

const CartScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
      cart: {cartItems},
  } = 
  return <div></div>;
};

export default CartScreen;
