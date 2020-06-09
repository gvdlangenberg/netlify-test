import { Dispatch } from 'redux';
import { executeGetRequest } from '../../api/client';
import { createAction } from '../../utilities/createAction';

export const GET_TODOS = 'GET_TODOS';

export function createGetTodosAction() {
    const promise = executeGetRequest('https://jsonplaceholder.typicode.com/todos');

    return createAction(GET_TODOS, promise);
}

export function createGetTodoByIdAction(id: string | string[]) {
    const promise = executeGetRequest(`https://jsonplaceholder.typicode.com/todos/${id}`);

    return promise;
}
