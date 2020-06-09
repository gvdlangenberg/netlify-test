import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../redux/store";
import { Todo } from "../redux/reducer/todoReducerFactory";

export function useTodo() {
    const todos = useSelector((state: GlobalState) => state.todo.items);
    const dispatch = useDispatch();

    function setTodos(todos: Todo[]) {
        dispatch({
            type: 'SET_TODOS',
            payload: todos
        })
    }

    function getTodoById(id: string) {
        const normalizedId = parseInt(id);
        return todos.find(todo => todo.id === id);
    }

    return {
        setTodos,
        todos,
        getTodoById
    };
}
