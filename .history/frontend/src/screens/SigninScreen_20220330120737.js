import React from 'react';
import Fr from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';

const SigninScreen = () => {
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <h1 className="my-3">Sign in</h1>
      <Form>

      </Form>
    </Container>
    
  );
};

export default SigninScreen;