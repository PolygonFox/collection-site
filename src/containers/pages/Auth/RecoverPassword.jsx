import React from 'react';

import styled from 'styled-components';
// import Link from 'react-router-dom/Link';

const Title = styled.h1`
    color: white;
`;

const Container = styled.div`
    display: grid;
    height: 100%;
    width: 100%;

    justify-items: center;
    align-items: center;
`;

const ForgotPassword = () => (
  <Container>
    <Title>Welcome to the forgot password page!</Title>
  </Container>
);

export default ForgotPassword;
