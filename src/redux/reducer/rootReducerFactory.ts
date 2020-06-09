import { combineReducers } from 'redux';
import todoReducer from './todoReducerFactory';

export function createRootReducer() {
    return combineReducers({
        todo: todoReducer,
    });
}
