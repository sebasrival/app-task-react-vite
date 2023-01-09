import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="bg-slate-900 text-white w-full h-full min-h-screen">
      <div className="m-auto max-w-6xl px-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<TodoForm />} />
        </Routes>
      </div>
    </div>

  );
};