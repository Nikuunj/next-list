"use client";

import React, { useState } from "react";
import useTodoStore from "../store/todoStore";

interface TodoItemProps {
  todo: { id: string; text: string; completed: boolean };
  day: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, day }) => {
  const { toggleTodo, deleteTodo, updateTodo } = useTodoStore();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(day, todo.id, updatedText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between my-2 bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition-colors duration-300">
      {isEditing ? (
        <input
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          className="border border-gray-700 rounded-md px-3 py-1 bg-gray-900 text-white focus:outline-none"
        />
      ) : (
        <span
          className={`flex-1 text-white ${todo.completed ? "line-through text-gray-500" : "text-gray-200"}`}
          onClick={() => toggleTodo(day, todo.id)}
        >
          {todo.text}
        </span>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-500 transition-colors duration-300"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-500 transition-colors duration-300"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(day, todo.id)}
          className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-500 transition-colors duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
