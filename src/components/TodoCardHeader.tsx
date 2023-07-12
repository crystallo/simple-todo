import { AddTodo } from "./AddTodo";
import { Day } from "./Day";

export const TodoCardHeader = () => {
  return (
    <div className="flex flex-col w-full gap-4 p-8 overflow-clip bg-gradient-to-r from-palette11 to-palette13">
      <Day />
      <AddTodo />
    </div>
  );
};
