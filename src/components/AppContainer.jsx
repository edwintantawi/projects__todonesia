import React from 'react';
import styled from 'styled-components';

const AppLogo = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 1440px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export default AppLogo;
