import "./App.css";
import { Toaster } from "react-hot-toast";
import { TodoCard } from "./components/TodoCard";

function App() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-gray-100">
      <Toaster />
      <TodoCard />
    </main>
  );
}

export default App;
