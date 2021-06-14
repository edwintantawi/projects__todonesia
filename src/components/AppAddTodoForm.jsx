import React, { useState } from 'react';
import useDataStore from '../hooks/useDataStore';
import firebase, { db } from '../services/firebase';
import AppWrapper from './AppWrapper';
import AppButton from './AppButton';
import AppTodoInput from './AppTodoInput';
import { Add } from '@material-ui/icons';

const AppAddTodoForm = () => {
  const [{ user }] = useDataStore();
  const [addTodoActiveState, setAddTodoActiveState] = useState(false);
  const [inputTodo, setInputTodo] = useState('');
  const [isActiveReminder, setIsActiveReminder] = useState(false);
  const [currentDateTime] = useState(
    new Date().toISOString().split('.')[0].split(':').splice(0, 2).join(':')
  );
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
      setIsActiveReminder(false);
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
  );
};

export default AppAddTodoForm;
