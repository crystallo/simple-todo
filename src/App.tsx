import "./App.css";
import { Toaster } from "react-hot-toast";
import { TodoCard } from "./components/TodoCard";

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen my-10">
      <Toaster />
      <TodoCard />
    </main>
  );
}

export default App;
