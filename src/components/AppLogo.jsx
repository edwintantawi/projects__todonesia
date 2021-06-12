import React from 'react';
import styled from 'styled-components';

const AppLogo = () => {
  return (
    <Logo>
      <img src="/logo512.png" alt="Todonesia" />
      <span>Todonesia</span>
    </Logo>
  );
};

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 40px;

  img {
    height: 30px;
    width: 50px;
    object-fit: contain;
  }
  span {
    margin-left: 0.1rem;
    font-size: 1rem;
  }

  @media screen and (min-width: 750px) {
    height: 50px;
    img {
      height: 44px;
    }

    span {
      font-size: 1.4rem;
      margin-left: 0.7rem;
    }
  }
`;

export default AppLogo;
