import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/AppContext";

export const App = () => {
  return (
    <div className="bg-slate-900 text-white w-full h-full min-h-screen">
      <div className="m-auto max-w-6xl px-5">
        <Navbar />
        <TodoProvider>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/add" element={<TodoForm />} />
            <Route path="/edit/:id" element={<TodoForm />} />
          </Routes>
        </TodoProvider>
      </div>
    </div>

  );
};