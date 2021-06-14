import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { NavLink } from 'react-router-dom';
import useDataStore from '../hooks/useDataStore';
import actionTypes from '../context/actionTypes';
import { getTodayReminder } from '../utils/reminder';

const AppMenu = () => {
  const [{ todos, activeMenu }, dispatch] = useDataStore();

  const handleClickLink = () => {
    dispatch({
      type: actionTypes.UPDATE_ACTIVE_MENU,
    });
  };

  return (
    <>
      <Menu activeMenu={activeMenu} id="menu-drawer">
        <NavLink exact to="/" onClick={handleClickLink}>
          All Todo
          <span>{todos.length}</span>
        </NavLink>
        <NavLink to="/today" onClick={handleClickLink}>
          Today
          <span>
            {
              todos.filter((filteredTodo) =>
                getTodayReminder(filteredTodo.reminder)
              ).length
            }
          </span>
        </NavLink>
        <NavLink to="/important" onClick={handleClickLink}>
          Important
        </NavLink>
        <NavLink to="/daily" onClick={handleClickLink}>
          Daily Todo
        </NavLink>
      </Menu>
      <MenuLayer activeMenu={activeMenu} onClick={handleClickLink} />
    </>
  );
};

const Menu = styled.nav`
  z-index: 8;
  position: fixed;
  top: 64px;
  bottom: 0;
  left: 0;
  width: 60%;
  padding: 1rem;
  transform: ${(props) =>
    props.activeMenu ? 'translateX(0)' : 'translateX(-100vw)'};
  transition: 350ms ease-in-out;

  background-color: ${colors.white};
  border-right: 1px solid ${colors.lightgray};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
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
    box-shadow: none;
  }

  & > a {
    display: flex;
    justify-content: space-between;
    padding: 0.7rem 1rem;
    text-decoration: none;
    margin-bottom: 1rem;
    border-left: 3px solid ${colors.primary500};
    font-size: 0.8rem;

    span {
      color: inherit;
      font-size: inherit;
    }

    @media screen and (min-width: 750px) {
      padding: 1rem 1.5rem;
      border-left: 5px solid ${colors.primary500};
    }
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

const MenuLayer = styled.div`
  z-index: 7;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  visibility: ${(props) => (props.activeMenu ? 'visible' : 'hidden')};
  @media screen and (min-width: 750px) {
    display: none;
  }
`;
export default AppMenu;
