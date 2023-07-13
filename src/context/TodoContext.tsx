import { nanoid } from "nanoid";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  updateTodoStatus: (id: string) => void;
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: nanoid(),
      text,
      status: "undone",
    };
    setTodos((prevTodos: Todo[]): Todo[] => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, text: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      );
    });
  };

  const updateTodoStatus = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === "undone" ? "done" : "undone" }
          : todo
      );
    });
  };

  const value: TodoContextProps = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    updateTodoStatus,
  };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};
