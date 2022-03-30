import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';

const CartScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1></h1>
    </div>
  );
};

export default CartScreen;
