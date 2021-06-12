import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { db } from '../services/firebase';

const AppTodoItem = ({ title, id, isDone }) => {
  const handleOnChange = (event) => {
    db.collection('todos').doc(id).update({
      isDone: event.target.checked,
    });
  };

  return (
    <TodoItem>
      <TodoCheck>
        <input type="checkbox" checked={isDone} onChange={handleOnChange} />
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
