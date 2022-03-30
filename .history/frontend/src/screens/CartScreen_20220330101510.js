import React, { useContext } from 'react';
import { Store } from '../Store';

const CartScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  
  return <div></div>;
};

export default CartScreen;
