import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
