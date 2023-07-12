import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

export const TodoCard = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white shadow-slate-500 rounded-3xl h-4/6 backdrop-blur-md">
      <AddTodo />
      <TodoList />
    </div>
  );
};
