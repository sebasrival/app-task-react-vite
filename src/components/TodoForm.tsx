import React, { useEffect, useState } from "react"
import { useTodo } from "../context/AppContext"
import { useNavigate, useParams } from "react-router-dom"
import { TodoType } from "./TodoList"

export const TodoForm = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const { tasks, dispatch } = useTodo()

  const [task, setTask] = useState<TodoType>(
    id ? tasks.find(t => t.id === id)! :
      { id: "", done: false, title: "", description: "" }
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (task.id) {
      dispatch({ type: "UPDATE_TODO", payload: task })
      navigate('/')
    } else if (task.title !== '' && task.description !== '') {
      dispatch({ type: "ADD_TODO", payload: { id: crypto.randomUUID(), description: task.description, done: false, title: task.title } })
      navigate('/')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    if (!id) return
    if (!tasks.some(t => t.id === id)) navigate('/')
  }, [])

  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className="py-5 text-xl font-bold">{id ? 'Editar Tarea' : 'Añadir una tarea'}</h1>
      <form className='flex flex-col gap-6 w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12' onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder='Escribe un títutlo'
          value={task.title}
          onChange={handleChange}
          className='focus:outline-none px-2 py-1 text-black bg-white h-10 rounded-sm'
        />
        <textarea
          id="description"
          name="description"
          placeholder='Escribe una descripción'
          value={task.description}
          onChange={handleChange}
          rows={4}
          className='focus:outline-none px-2 py-1 text-black bg-white rounded-sm'
        ></textarea>
        <button
          type="submit"
          className='bg-teal-700 h-10 rounded-sm'
        > Añadir tarea</button>
      </form>
    </div>
  )
}
