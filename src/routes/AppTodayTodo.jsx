import React from 'react';
import AppMainHeader from '../components/AppMainHeader';
import AppTodoList from '../components/AppTodoList';
import AppTodoItem from '../components/AppTodoItem';
import useDataStore from '../hooks/useDataStore';
import { getTodayReminder } from '../utils/reminder';
import AppAddTodoForm from '../components/AppAddTodoForm';

const AppTodayTodo = () => {
  const [{ todos }] = useDataStore();

  return (
    <div>
      <AppMainHeader
        title="Today"
        description="What is your main focus for today?"
      />
      <AppTodoList>
        {todos
          .filter((filteredTodo) => getTodayReminder(filteredTodo.reminder))
          .map((todo) => (
            <AppTodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isDone={todo.isDone}
              reminder={todo.reminder}
            />
          ))}
        <AppAddTodoForm />
      </AppTodoList>
    </div>
  );
};

export default AppTodayTodo;
