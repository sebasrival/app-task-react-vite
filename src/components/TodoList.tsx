import { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { FaPen } from "react-icons/fa";
import { useTodo } from "../context/AppContext";

export interface TodoType {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

export const TodoList = () => {
  const { state, dispatch } = useTodo()
  const [todo, setTodo] = useState(state);

  const handlerClick = (id: string) => {
    let index = todo.findIndex(x => x.id === id)
    todo[index].done = !todo[index].done
    setTodo([...todo])
  };

  const handlerDeleteClick = (id: string) => {
    let temp = todo.filter(x => x.id !== id)
    setTodo(temp)
  }

  useEffect(() => {
    console.log("array", { ...todo })
  })

  return (
    <div className="flex gap-3 w-full flex-col justify-center items-center content-center">
      {todo?.map((x) => (
        <div
          className={`w-10/12 min-h-[80px] m-auto bg-teal-900 px-4 pt-1 pb-2 hover:bg-teal-800 cursor-pointer shadow-sm shadow-gray-900 relative`}
          key={x.id}
        >
          <div
            onClick={() => {
              handlerClick(x.id)
              dispatch({
                type: 'ADD_TODO', payload: {
                  id: '1',
                  title: "Titulo de la tarea",
                  description: "Esto es una decripcion de una tarea",
                  done: false,
                }
              })
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
            onClick={() => handlerDeleteClick(x.id)}>
            <TiDeleteOutline size={30} />
          </button>
          <button className="absolute right-10 top-2 hover:text-yellow-600">
            <FaPen size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};
