import React from 'react';
import styled from 'styled-components/native';

import Logo from '../../assets/logo2.svg';

export default function Header() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  align-items: flex-start;
  background-color: transparent;
  padding: 0px 17px;
  margin-bottom: 34px;
`;
