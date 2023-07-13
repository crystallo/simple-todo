import { TodoCardHeader } from "./TodoCardHeader";
import { TodoList } from "./TodoList";

export const TodoCard = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-white shadow-xl overflow-clip rounded-3xl shadow-slate-300/50 md:w-2/3 md:h-5/6">
      <TodoCardHeader />
      <TodoList />
    </div>
  );
};
