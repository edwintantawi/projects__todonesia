import React, { useState } from 'react';
import AppMainHeader from '../components/AppMainHeader';
import AppTodoList from '../components/AppTodoList';
import AppTodoItem from '../components/AppTodoItem';
import AppTodoInput from '../components/AppTodoInput';
import AppButton from '../components/AppButton';
import { Add } from '@material-ui/icons';
import AppWrapper from '../components/AppWrapper';
import useDataStore from '../hooks/useDataStore';
import actionTypes from '../context/actionTypes';

const AppTodayTodo = () => {
  const [{ todos }, dispatch] = useDataStore();
  const [addTodoActiveState, setAddTodoActiveState] = useState(false);
  const [inputTodo, setInputTodo] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!addTodoActiveState) {
      setAddTodoActiveState(true);
      return;
    }

    if (inputTodo === '') {
      return;
    }

    dispatch({
      type: actionTypes.ADD_TODO,
      payload: {
        id: new Date().toISOString(),
        title: inputTodo,
      },
    });

    setInputTodo('');
  };

  const handleCancelTodo = () => {
    setInputTodo('');
    setAddTodoActiveState(false);
  };

  return (
    <div>
      <AppMainHeader
        title="Today"
        description="What is your main focus for today?"
      />
      <AppTodoList>
        {todos.map((todo) => (
          <AppTodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isDone={todo.isDone}
          />
        ))}
      </AppTodoList>

      <form onSubmit={handleAddTodo}>
        {addTodoActiveState && (
          <AppTodoInput value={inputTodo} onChange={setInputTodo} />
        )}

        <AppWrapper>
          <AppButton
            title="Add Todo"
            Icon={!addTodoActiveState && Add}
            primary={addTodoActiveState}
            type={addTodoActiveState ? 'submit' : undefined}
          />
          {addTodoActiveState && (
            <AppButton title="Cancel" onClick={handleCancelTodo} />
          )}
        </AppWrapper>
      </form>
    </div>
  );
};

export default AppTodayTodo;
