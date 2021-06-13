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
  const [isActiveReminder, setIsActiveReminder] = useState(false);
  const [currentDateTime] = useState(new Date().toISOString().split('.')[0]);
  const [reminder, setReminder] = useState(currentDateTime);

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!addTodoActiveState) {
      setAddTodoActiveState(true);
      return;
    }

    if (inputTodo === '') {
      return;
    }

    let reminderTodo = null;

    if (isActiveReminder) {
      reminderTodo = reminder;
    }

    const todoData = {
      uid: user.uid,
      title: inputTodo,
      isDone: false,
      reminder: reminderTodo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    db.collection('todos').add(todoData);
    setInputTodo('');
  };

  const handleCancelTodo = () => {
    setInputTodo('');
    setAddTodoActiveState(false);
  };

  const handleActiveReminder = () => {
    setIsActiveReminder((prev) => !prev);
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
            reminder={todo.reminder}
          />
        ))}
        <form onSubmit={handleAddTodo}>
          {addTodoActiveState && (
            <AppTodoInput
              value={inputTodo}
              onChange={setInputTodo}
              onClickActiveReminder={handleActiveReminder}
              isActiveReminder={isActiveReminder}
              reminder={reminder}
              onChangeReminder={setReminder}
            />
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
