import { useReducer } from "react"
import { todoReducer } from './todoReducer'
const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Correr bien resio',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Correr bien resio',
    //     done: false,
    // }
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }
    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatch(action);
    }
    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatch(action);
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}