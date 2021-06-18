import React from 'react';
import AppMainHeader from '../components/AppMainHeader';
import AppTodoList from '../components/AppTodoList';
import AppTodoItem from '../components/AppTodoItem';
import useDataStore from '../hooks/useDataStore';
import AppAddTodoForm from '../components/AppAddTodoForm';

const AppTodayTodo = () => {
  const [{ todos }] = useDataStore();

  return (
    <div>
      <AppMainHeader
        title="Unfinished"
        description="complete your task, and finish on time"
      />
      <AppTodoList>
        {todos
          .filter((filteredTodo) => filteredTodo.isDone === false)
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
