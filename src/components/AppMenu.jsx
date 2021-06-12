import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { NavLink } from 'react-router-dom';
import useDataStore from '../hooks/useDataStore';
import actionTypes from '../context/actionTypes';

const AppMenu = () => {
  const [{ activeMenu }, dispatch] = useDataStore();

  const handleClickLink = () => {
    dispatch({
      type: actionTypes.UPDATE_ACTIVE_MENU,
    });
  };

  return (
    <Menu activeMenu={activeMenu}>
      <NavLink exact to="/" onClick={handleClickLink}>
        Today
      </NavLink>
      <NavLink to="/important" onClick={handleClickLink}>
        Important
      </NavLink>
      <NavLink to="/daily" onClick={handleClickLink}>
        Daily Todo
      </NavLink>
      <NavLink to="/all" onClick={handleClickLink}>
        All Todo
      </NavLink>
    </Menu>
  );
};

const Menu = styled.nav`
  z-index: 9;
  position: fixed;
  top: 66px;
  bottom: 0;
  left: 0;
  width: 60%;
  padding: 1rem;
  transform: ${(props) =>
    props.activeMenu ? 'translateX(0)' : 'translateX(-100vw)'};
  transition: 350ms ease-in-out;

  background-color: ${colors.white};
  border-right: 1px solid ${colors.gray};
  border-radius: 0;

  @media screen and (min-width: 750px) {
    transform: none;
    position: sticky;
    top: 119px;
    padding: 0;
    width: 100%;
    height: max-content;
    border-radius: 1rem;
    margin-top: 0.8rem;
    border: none;
  }

  & > a {
    display: block;
    padding: 1rem 1.5rem;
    text-decoration: none;
    margin-bottom: 1rem;
    border-left: 5px solid ${colors.primary500};
    font-size: 0.8rem;
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
