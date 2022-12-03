import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="bg-slate-800 h-screen text-center text-gray-300 pt-10 px-10 xl:px-48 sm:px-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<TodoForm />} />
      </Routes>
    </div>
  );
};
