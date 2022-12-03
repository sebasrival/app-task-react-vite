import { useEffect, useState } from "react"
import { TiDeleteOutline } from "react-icons/ti"
import { FaPen } from "react-icons/fa" 

interface TodoType {
  id: string,
  title: string,
  description: string,
  done: boolean
}

export const TodoList= () => {

  const data = [{
    id: 1,
    title: 'Titulo de la tarea',
    description: 'Esto es una decripcion de una tarea',
    doneTask: true
  },
  {
    id: 1,
    title: 'Titulo de la tarea',
    description: 'Esto es una decripcion de una tarea Esto es una decripcion de una tarea Esto es una decripcion de una tarea Esto es una decripcion de una tarea Esto es una decripcion de una tarea Esto es una decripcion de una tarea Esto es una decripcion de una tarea Esto es una decripcion de una tarea',
    doneTask: true
  }
  ]

  const [todo, setTodo] = useState(data)

  const handClick = () => {
    setTodo([...todo, { id: 1,
      title: 'Titulo de la tarea',
      description: 'Esto es una decripcion de una tarea',
      doneTask: false}])
      console.log('asd')
  }

  useEffect(()=>{
    console.log(todo)
  })

  return (
    <div className="w-full flex-col justify-center items-center content-center">
      { todo.map((x)=>(
        <div className={`mb-3 w-5/12 min-h-[80px] m-auto bg-teal-900 px-4 pt-1 pb-2 hover:bg-teal-800 cursor-pointer shadow-sm shadow-gray-900 relative`} onClick={() => handClick()}>
          <div className={`font-bold text-sm text mb-1 ${x.doneTask === true? 'line-through': ''}`}>{x.title}</div>
          <p className={`text-xs text-start ${x.doneTask === true ? 'line-through': ''}`}>
            {x.description}
          </p>
          <button className="absolute top-1 right-1 hover:text-red-600">
            <TiDeleteOutline  className="h-5" />
          </button>
          <button className="absolute top-1 right-6 hover:text-yellow-600">
            <FaPen className="h-3 m-1"/>
          </button>
        </div>
      ))}
    </div>
  )
}
