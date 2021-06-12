import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { NavLink } from 'react-router-dom';

const AppMenu = () => {
  return (
    <Menu>
      <NavLink exact to="/">
        Today
      </NavLink>
      <NavLink to="/important">Important</NavLink>
      <NavLink to="/daily">Daily Todo</NavLink>
      <NavLink to="/all">All Todo</NavLink>
    </Menu>
  );
};

const Menu = styled.nav`
  position: sticky;
  top: 119px;
  height: max-content;
  border-radius: 1rem;
  margin-top: 0.8rem;

  & > a {
    display: block;
    padding: 0.8rem 1.5rem;
    text-decoration: none;
    margin-bottom: 1rem;
    border-left: 5px solid ${colors.primary500};
  }

  & > a.active {
    background-color: ${colors.primary500};
    color: ${colors.white};
    font-weight: ${fonts.semibold};
    border-radius: 0.5rem;
  }

  & > a:hover:not(.active) {
    background-color: ${colors.primary200};
  }
`;
export default AppMenu;
