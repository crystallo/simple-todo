import { motion } from "framer-motion";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import useTodo from "../hooks/useTodo";
import toast from "react-hot-toast";
import Input from "./Input";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const [editingTodoText, setEditingTodoText] = useState<string>("");
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  const { deleteTodo, editTodo, updateTodoStatus } = useTodo();

  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingTodoId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingTodoId]);

  const handleEdit = (todoId: string, todoText: string) => {
    setEditingTodoId(todoId);
    setEditingTodoText(todoText);

    if (editInputRef.current) {
      editInputRef.current.focus();
    }
  };

  const handleUpdate = (todoId: string) => {
    if (editingTodoText.trim() !== "") {
      editTodo(todoId, editingTodoText);
      setEditingTodoId(null);
      setEditingTodoText("");
      toast.success("Updated! 😄");
    } else {
      toast.error("It cannot be empty!");
    }
  };

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId);
    toast.success("Deleted successfully!");
  };

  const handleStatusUpdate = (todoId: string) => {
    updateTodoStatus(todoId);
  };

  return (
    <motion.li
      layout
      key={todo.id}
      className={cn(
        "p-4 rounded-2xl bg-slate-100/80",
        todo.status === "done" && "bg-opacity-20 text-zinc-500"
      )}
    >
      {editingTodoId === todo.id ? (
        <motion.div layout className="flex gap-2">
          <Input
            ref={editInputRef}
            type="text"
            value={editingTodoText}
            onChange={(e) => setEditingTodoText(e.target.value)}
          />
          <button
            className="px-5 py-2 text-sm font-normal bg-white active:scale-80 rounded-xl"
            onClick={() => handleUpdate(todo.id)}
          >
            Update
          </button>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-5">
          <motion.span
            layout
            style={{
              textDecoration: todo.status === "done" ? "line-through" : "none",
            }}
          >
            {todo.text}
          </motion.span>
          <div className="flex justify-between gap-5 text-white">
            <button onClick={() => handleStatusUpdate(todo.id)}>
              {todo.status === "undone" ? (
                <span className="flex items-center gap-1">
                  {/* <BsCheck2Square /> */}
                  Mark Completed
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  {/* <TbRefresh /> */}
                  Mark Undone
                </span>
              )}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="flex items-center gap-1 "
              >
                {/* <FaRegEdit /> */}
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="flex items-center gap-1 text-red-500"
              >
                {/* <RiDeleteBin7Line /> */}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.li>
  );
};
