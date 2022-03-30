import React, { useContext } from 'react';
import { Store } from '../Store';

const CartScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
      cart: {cartI}
  }
  return <div></div>;
};

export default CartScreen;
