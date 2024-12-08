"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todosByDay: Record<string, Todo[]>; // Store todos for each day
  addTodo: (day: string, todo: Todo) => void;
  toggleTodo: (day: string, id: string) => void;
  updateTodo: (day: string, id: string, updatedText: string) => void;
  deleteTodo: (day: string, id: string) => void;
}

const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todosByDay: {
        Sunday: [],
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
      },
      addTodo: (day, todo) =>
        set((state) => ({
          todosByDay: {
            ...state.todosByDay,
            [day]: [...state.todosByDay[day], todo],
          },
        })),
      toggleTodo: (day, id) =>
        set((state) => ({
          todosByDay: {
            ...state.todosByDay,
            [day]: state.todosByDay[day].map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
          },
        })),
      updateTodo: (day, id, updatedText) =>
        set((state) => ({
          todosByDay: {
            ...state.todosByDay,
            [day]: state.todosByDay[day].map((todo) =>
              todo.id === id ? { ...todo, text: updatedText } : todo
            ),
          },
        })),
      deleteTodo: (day, id) =>
        set((state) => ({
          todosByDay: {
            ...state.todosByDay,
            [day]: state.todosByDay[day].filter((todo) => todo.id !== id),
          },
        })),
    }),
    {
      name: "todo-storage",
    }
  )
);

export default useTodoStore;
