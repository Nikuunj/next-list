"use client";

import React, { useState, useEffect } from "react";
import useTodoStore from "../store/todoStore";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import DaySelector from "./DaySelector";

const TodoList: React.FC = () => {
  const { todosByDay } = useTodoStore();
  const [selectedDay, setSelectedDay] = useState<string>("");

  useEffect(() => {
    const currentDay = new Date().toLocaleDateString("en-US", { weekday: "long" });
    setSelectedDay(currentDay);
  }, []);

  const todos = todosByDay[selectedDay] || [];

  return (
    <div className="max-w-md mx-auto p-4 bg-dark-bg text-dark-text rounded-lg shadow-lg">
      <DaySelector selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <AddTodo selectedDay={selectedDay} />
      <div className="mt-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} day={selectedDay} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
