import { useEffect, useRef, useState } from "react";
import useTodo from "../hooks/useTodo";
import toast from "react-hot-toast";
import AddIcon from "@mui/icons-material/Add";
import Input from "./Input";

export const AddTodo = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodo();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
      toast.success("Woot! One more thing to do 🥴!");
    } else {
      toast.error("I cannot read mind, the input cannot be empty!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full items-center gap-2">
        <Input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="what do i need to do ..."
        />
        <button
          aria-label="add task"
          type="submit"
          className="rounded-full border border-transparent bg-white/80 p-2 backdrop-blur transition duration-300 hover:bg-palette11 focus:shadow-sm active:scale-90"
        >
          <AddIcon />
        </button>
      </div>
    </form>
  );
};
