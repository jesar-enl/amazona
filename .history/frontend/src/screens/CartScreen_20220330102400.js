import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
            {cartItems.length === 0 ? (
                <MessageBox>Cart is empty. <Link to="/">Go Shopping</Link></MessageBox>
            ): 
            (
                <ListGroup>
                    {cartItems.map((item) => {
                        <ListGroup.Item key={item._id}>
                            <Row
                        </ListGroup.Item>
                    })}
                </ListGroup>
            )
            }
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
};

export default CartScreen;
