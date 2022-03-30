import React from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';

const SigninScreen = () => {
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <h1 className="my-3"></h1>
    </Container>
  );
};

export default SigninScreen;
