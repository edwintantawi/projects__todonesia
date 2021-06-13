import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { IconButton } from '@material-ui/core';

const AppTodoInput = ({
  value,
  onChange,
  isActiveReminder,
  onClickActiveReminder,
  reminder,
  onChangeReminder,
}) => {
  return (
    <InputTodo>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., Take a Meeting at 9.20pm"
        autoFocus
      />
      <Utility>
        <input
          type="datetime-local"
          value={reminder}
          onChange={(e) => onChangeReminder(e.target.value)}
          style={{ visibility: isActiveReminder ? 'visible' : 'hidden' }}
        />
        <UtilityItem>
          <IconButton
            size="small"
            title="Reminder"
            onClick={onClickActiveReminder}
          >
            <AccessAlarmIcon />
          </IconButton>
        </UtilityItem>
      </Utility>
    </InputTodo>
  );
};

AppTodoInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const InputTodo = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.gray};
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.6rem;

  @media screen and (min-width: 750px) {
    padding: 1rem;
  }

  input[type='text'] {
    display: block;
    border: none;
    outline: none;
    padding: 0.5rem 0.5rem 0.8rem;
    border-bottom: 1px solid ${colors.gray};
  }

  input[type='datetime-local'] {
    width: max-content;
    outline: none;
    background-color: white;
    border: none;
    font-size: 0.9rem;
  }
`;
const Utility = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0 0.5rem;
`;

const UtilityItem = styled.div`
  display: flex;
  align-items: center;
`;

export default AppTodoInput;
