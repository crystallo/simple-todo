import { useEffect, useRef, useState } from "react";
import { useTodo } from "../hooks/useTodo";
import toast from "react-hot-toast";
import AddIcon from "@mui/icons-material/Add";

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
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="what do i need to do ..."
          className="w-full px-3 py-2 text-sm bg-white border border-white rounded-full outline-none grow backdrop-blur bg-opacity-80 backdrop-filter focus:border focus:border-slate-300"
        />
        <button
          type="submit"
          className="p-2 transition duration-300 bg-white border border-transparent rounded-full active:scale-95 hover:bg-palette11"
        >
          <AddIcon />
        </button>
      </div>
    </form>
  );
};
