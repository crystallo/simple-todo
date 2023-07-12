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
      <div className="flex items-center w-full gap-2">
        <Input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="what do i need to do ..."
        />
        <button
          type="submit"
          className="p-2 transition duration-300 bg-white border border-transparent rounded-full active:scale-90 hover:bg-palette11 backdrop-blur bg-opacity-80 focus:shadow-sm"
        >
          <AddIcon />
        </button>
      </div>
    </form>
  );
};
