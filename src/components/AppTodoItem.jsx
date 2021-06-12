import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import useDataStore from '../hooks/useDataStore';
import actionTypes from '../context/actionTypes';

const AppTodoItem = ({ title, id, isDone }) => {
  const [, dispatch] = useDataStore();

  const handleOnChange = (event) => {
    dispatch({
      type: actionTypes.UPDATE_TODO,
      payload: {
        id: event.target.id,
      },
    });
  };

  return (
    <TodoItem>
      <TodoCheck>
        <input
          type="checkbox"
          checked={isDone}
          onChange={handleOnChange}
          id={id}
        />
      </TodoCheck>
      <TodoTask>
        <h3>{title}</h3>
      </TodoTask>
    </TodoItem>
  );
};

AppTodoItem.propTypes = {
  title: PropTypes.string,
  isDone: PropTypes.bool,
};

AppTodoItem.defaultProps = {
  isDone: false,
};

const TodoItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 50px 1fr;
  column-gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${colors.gray};
`;

const TodoCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input[type='checkbox'] {
    transform: scale(1.4);
    cursor: pointer;
  }
`;

const TodoTask = styled.div`
  h3 {
    font-weight: ${fonts.medium};
  }
`;

export default AppTodoItem;
