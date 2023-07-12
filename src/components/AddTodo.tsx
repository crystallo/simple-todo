import { useEffect, useRef, useState } from "react";
import { useTodo } from "../hooks/useTodo";
import toast from "react-hot-toast";

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
      <div className="flex items-center w-full gap-2 p-5">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="what do i need to do ..."
          className="w-full px-3 py-2 bg-white border rounded-md outline-none border-slate-200 focus:border focus:border-slate-300 focus:shadow-md"
        />
        <button
          type="submit"
          className="px-3 py-2 transition duration-300 border rounded-md border-slate-200 active:scale-95 hover:bg-sky-200"
        >
          Add
        </button>
      </div>
    </form>
  );
};
