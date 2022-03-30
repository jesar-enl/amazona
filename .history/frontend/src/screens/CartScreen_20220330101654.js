import React, { useContext } from 'react';
import { Store } from '../Store';

const CartScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return <div>
      <Helmet>
          <title></title>
      </Helmet>
  </div>;
};

export default CartScreen;
