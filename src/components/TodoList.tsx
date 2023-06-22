import { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { FaPen } from "react-icons/fa";
import { useTodo } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export interface TodoType {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

export const TodoList = () => {

  const { tasks, dispatch } = useTodo()

  const navigate = useNavigate()

  const handlerClickToogleDone = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id })
  };

  const handlerDeleteClick = (id: string) => {
    dispatch({ type: 'REMOVE_TODO', payload: id })
  }

  useEffect(() => {
    if (tasks.length === 0) navigate('/add')
  }, [])

  return (
    <div className="flex gap-4 w-full flex-col justify-center items-center content-center">
      {tasks?.map((x) => (
        <div
          className={`w-10/12 min-h-[80px] m-auto bg-cyan-900 px-4 pt-1 pb-2 hover:bg-cyan-700 cursor-pointer shadow-sm shadow-gray-900 relative rounded-lg border-gray-700 border`}
          key={x.id}
        >
          <div
            onClick={() => {
              handlerClickToogleDone(x.id)
            }}
          >
            <div
              className={`font-bold text-lg text mb-1`}
            >
              {x.title}
            </div>
            <p
              className={`text-base text-start ${x.done === true ? "line-through" : ""
                }`}
            >
              {x.description}
            </p>
          </div>
          <button className="absolute right-1 top-1 hover:text-red-600" title="Eliminar"
            onClick={() => handlerDeleteClick(x.id)}
          >
            <TiDeleteOutline size={30} />
          </button>
          <button className="absolute right-10 top-2 hover:text-yellow-600"
            onClick={() => navigate('/edit/' + x.id)}
          >
            <FaPen size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};
