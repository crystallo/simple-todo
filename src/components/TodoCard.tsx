import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

export const TodoCard = () => {
  return (
    <div className="shadow-md">
      <AddTodo />
      <TodoList />
    </div>
  );
};
