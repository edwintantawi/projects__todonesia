import React from 'react';
import styled from 'styled-components';

const AppTodoList = ({ children }) => {
  return <TodoList>{children}</TodoList>;
};

const TodoList = styled.ul`
  margin-top: 2rem;
`;

export default AppTodoList;
