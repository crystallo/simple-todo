import "./App.css";
import { Toaster } from "react-hot-toast";
import { TodoCard } from "./components/TodoCard";

function App() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
      <Toaster />
      <TodoCard />
    </main>
  );
}

export default App;
