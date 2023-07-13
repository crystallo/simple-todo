import { TodoCardHeader } from "./TodoCardHeader";
import { TodoList } from "./TodoList";

export const TodoCard = () => {
  return (
    <div className="flex flex-col items-center w-5/6 bg-white shadow-xl h-5/6 overflow-clip rounded-3xl shadow-slate-300/50 md:w-2/3">
      <TodoCardHeader />
      <TodoList />
    </div>
  );
};
