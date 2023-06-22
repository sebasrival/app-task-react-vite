import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import { TodoType } from "../components/TodoList";

const initialState = [] as TodoType[];

type ContextProps = {
    tasks: TodoType[]
    dispatch: Dispatch<TodoAction>
}

const TodoContext = createContext<ContextProps>({} as ContextProps)


type PropsProvider = {
    children: ReactNode;
}

type TodoAction =
    {
        type: 'ADD_TODO',
        payload: TodoType
    } |
    {
        type: 'TOGGLE_TODO',
        payload: string
    } |
    {
        type: 'REMOVE_TODO',
        payload: string
    } |
    {
        type: 'UPDATE_TODO',
        payload: TodoType
    }



function todoReducer(state: TodoType[], action: TodoAction): TodoType[] {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    todo.done = !todo.done;
                }
                return todo;
            });
        case 'UPDATE_TODO':
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                }
                return todo;
            });
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
}

export const TodoProvider: React.FC<PropsProvider> = ({ children }) => {

    const [tasks, dispatch] = useReducer(todoReducer, initialState)


    return (
        <>
            <TodoContext.Provider value={{ tasks, dispatch }}>
                {children}
            </TodoContext.Provider>
        </>
    )
}

export const useTodo = () => useContext(TodoContext)



