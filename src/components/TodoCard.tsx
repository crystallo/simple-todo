import { AddTodo } from "./AddTodo";
import { TodoCardHeader } from "./TodoCardHeader";
import { TodoList } from "./TodoList";

export const TodoCard = () => {
  return (
    <div className="flex flex-col items-center w-5/6 bg-white shadow-xl h-5/6 md:w-1/2 shadow-slate-300/50 rounded-3xl md:h-4/6 overflow-clip">
      <TodoCardHeader />
      <TodoList />
    </div>
  );
};
