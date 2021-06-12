import React from 'react';
import styled from 'styled-components';

const AppWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default AppWrapper;
