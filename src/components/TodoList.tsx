import useTodo from "../hooks/useTodo";
import { TodoItem } from "./TodoItem";
import { motion } from "framer-motion";

export const TodoList = () => {
  const { todos } = useTodo();

  return (
    <section className="w-full p-8 overflow-y-auto text-center no-scrollbar">
      {todos.length == 0 ? (
        <p> There's nothing to do! ☁️</p>
      ) : (
        <motion.ul className="grid gap-4 max-w">
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </motion.ul>
      )}
    </section>
  );
};
