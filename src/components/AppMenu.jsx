import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { NavLink } from 'react-router-dom';

const AppMenu = () => {
  return (
    <Menu>
      <NavLink to="/">Today</NavLink>
      <NavLink to="/important">Important</NavLink>
      <NavLink to="/daily">Daily Todo</NavLink>
      <NavLink to="/all">All Todo</NavLink>
    </Menu>
  );
};

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  border: 1px solid ${colors.primary300};
  border-radius: 1rem;
`;
export default AppMenu;
