import useTodo from "../hooks/useTodo";
import { TodoItem } from "./TodoItem";
import { motion } from "framer-motion";

export const TodoList = () => {
  const { todos } = useTodo();

  return (
    <section className="no-scrollbar w-full overflow-y-auto p-8">
      {todos.length == 0 ? (
        <p className="text-center ">There's nothing to do! ☁️</p>
      ) : (
        <motion.ul className="grid gap-4">
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </motion.ul>
      )}
    </section>
  );
};
