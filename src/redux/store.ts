import { createStore } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { createRootReducer } from './reducer/rootReducerFactory';
import { createMiddlewareChain } from './middleware/middlewareFactory';
import { TodoReducerState } from './reducer/todoReducerFactory';

export interface GlobalState {
  todo: TodoReducerState;
}

export const makeStore: MakeStore<GlobalState> = () => createStore(
  createRootReducer(),
  createMiddlewareChain()
);

export const wrapper = createWrapper<GlobalState>(makeStore);
