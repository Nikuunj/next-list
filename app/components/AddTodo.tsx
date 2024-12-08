"use client";

import React, { useState } from "react";
import useTodoStore from "../store/todoStore";
import { v4 as uuidv4 } from "uuid";

interface AddTodoProps {
  selectedDay: string;
}

const AddTodo: React.FC<AddTodoProps> = ({ selectedDay }) => {
  const { addTodo } = useTodoStore();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() === "") return;
    addTodo(selectedDay, { id: uuidv4(), text, completed: false });
    setText("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-700 rounded-md px-2 py-1 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        placeholder="Add a task..."
      />
      <button
        onClick={handleAddTodo}
        className="bg-gray-700 text-white px-4 py-1 rounded-md hover:bg-gray-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
