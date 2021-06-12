import React, { useState } from 'react';
import AppMainHeader from '../components/AppMainHeader';
import AppTodoList from '../components/AppTodoList';
import AppTodoItem from '../components/AppTodoItem';
import AppTodoInput from '../components/AppTodoInput';
import AppButton from '../components/AppButton';
import { Add } from '@material-ui/icons';
import AppWrapper from '../components/AppWrapper';
import useDataStore from '../hooks/useDataStore';
import firebase, { db } from '../services/firebase';

const AppTodayTodo = () => {
  const [{ user, todos }] = useDataStore();
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

    const todoData = {
      uid: user.uid,
      title: inputTodo,
      isDone: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    db.collection('todos').add(todoData);
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
      </AppTodoList>
    </div>
  );
};

export default AppTodayTodo;
