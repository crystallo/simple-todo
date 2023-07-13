import { motion } from "framer-motion";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import useTodo from "../hooks/useTodo";
import toast from "react-hot-toast";
import Input from "./Input";
import {
  Check,
  CheckCircle,
  CheckCircleOutline,
  Delete,
  Edit,
} from "@mui/icons-material";

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
        "p-4 rounded-2xl bg-slate-100/80 scale-hover animate-fade-in-up",
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
            className="rounded-full bg-white p-2"
            onClick={() => handleUpdate(todo.id)}
          >
            <Check fontSize="small" />
          </button>
        </motion.div>
      ) : (
        <div className="flex gap-2">
          <button
            aria-label="update task's status"
            onClick={() => handleStatusUpdate(todo.id)}
          >
            {todo.status === "undone" ? (
              <CheckCircleOutline fontSize="small" />
            ) : (
              <CheckCircle fontSize="small" />
            )}
          </button>
          <motion.span
            layout
            style={{
              textDecoration: todo.status === "done" ? "line-through" : "none",
            }}
            className="w-full"
          >
            {todo.text}
          </motion.span>
          <div className="flex justify-between gap-5 text-white">
            <div className="flex items-center gap-2">
              <button
                aria-label="edit task"
                onClick={() => handleEdit(todo.id, todo.text)}
                className="flex items-center gap-1 "
              >
                <Edit />
              </button>
              <button
                aria-label="delete task"
                onClick={() => handleDelete(todo.id)}
                className="flex items-center gap-1 text-red-500"
              >
                <Delete />
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.li>
  );
};
