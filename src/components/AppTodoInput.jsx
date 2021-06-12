import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const AppTodoInput = ({ value, onChange }) => {
  return (
    <InputTodo>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., Take a Meeting at 9.20pm"
        autoFocus
      />
    </InputTodo>
  );
};

AppTodoInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const InputTodo = styled.div`
  border: 1px solid ${colors.gray};
  padding: 1rem 1.5rem 2rem;
  border-radius: 0.5rem;
  margin-bottom: 0.6rem;

  input[type='text'] {
    border: none;
    outline: none;
    width: 100%;
  }
`;

export default AppTodoInput;
