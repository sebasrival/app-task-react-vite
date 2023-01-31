import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import { TodoType } from "../components/TodoList";

const initialState = [{
    id: '1',
    title: "Titulo de la tarea",
    description: "Esto es una decripcion de una tarea",
    done: false,
},
{
    id: '2',
    title: "Titulo de la tarea",
    description:
        "Esto es una decripcion de una tarea Esto es una decripcion de una tarea Esto es una decripcion de una tarea Esto es una decripcion de una tarea Esto es una decripcion de una tarea Esto es una decripcion de una tarea Esto es una decripcion de una tarea Esto es una decripcion de una tarea",
    done: false,
}]

type ContextProps = {
    state: TodoType[]
    dispatch: Dispatch<TodoAction>
}

const TodoContext = createContext<ContextProps>({} as ContextProps)


type PropsProvider = {
    children: ReactNode;
}

type TodoAction =
    | {
        type: 'GET_TODOS'
    } |
    {
        type: 'ADD_TODO',
        payload: TodoType
    }



function todosReducer(state: TodoType[], action: TodoAction): TodoType[] {
    console.log(state, action)
    return state
}

export const TodoProvider: React.FC<PropsProvider> = ({ children }) => {

    const [state, dispatch] = useReducer(todosReducer, initialState)


    return (
        <>
            <TodoContext.Provider value={{ state, dispatch }}>
                {children}
            </TodoContext.Provider>
        </>
    )
}

export const useTodo = () => useContext(TodoContext)



