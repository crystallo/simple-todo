import { AddTodo } from "./AddTodo";
import { Day } from "./Day";

export const TodoCardHeader = () => {
  return (
    <div className="flex w-full flex-col gap-4 bg-gradient-to-r from-palette11 to-palette13 p-8">
      <Day />
      <AddTodo />
    </div>
  );
};
