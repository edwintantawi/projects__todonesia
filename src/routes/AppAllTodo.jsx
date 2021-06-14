import React from 'react';
import AppMainHeader from '../components/AppMainHeader';
import AppTodoList from '../components/AppTodoList';
import AppTodoItem from '../components/AppTodoItem';
import useDataStore from '../hooks/useDataStore';
import AppAddTodoForm from '../components/AppAddTodoForm';

const AppAllTodo = () => {
  const [{ todos }] = useDataStore();

  return (
    <div>
      <AppMainHeader title="All Todo" description="What is your main focus?" />
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
        <AppAddTodoForm />
      </AppTodoList>
    </div>
  );
};

export default AppAllTodo;
