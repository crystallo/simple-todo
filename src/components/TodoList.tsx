import useTodo from "../hooks/useTodo";
import { TodoItem } from "./TodoItem";
import { motion } from "framer-motion";

export const TodoList = () => {
  const { todos } = useTodo();

  return (
    <div className="overflow-y-auto ">
      {todos.length == 0 ? (
        <p> There's nothing to do! ☁️</p>
      ) : (
        <motion.ul className="grid max-w-lg gap-2 px-5 m-auto">
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </motion.ul>
      )}
    </div>
  );
};
