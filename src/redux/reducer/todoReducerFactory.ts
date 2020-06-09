import { AnyAction } from "redux";
import produce from 'immer';
import { GET_TODOS } from "../action/todoActionFactory";
import { ActionType } from "redux-promise-middleware";
import { HYDRATE } from "next-redux-wrapper";

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoReducerState {
    items: Todo[];
}

const initialState = {
    items: []
};

const todoReducer = (state: TodoReducerState = initialState, action: AnyAction) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case HYDRATE:
                draft.items = action.payload.todo.items;
                return;
            case `${GET_TODOS}_${ActionType.Fulfilled}`:
                draft.items = action.payload.data;
                return;
        }
    });
}

export default todoReducer;
