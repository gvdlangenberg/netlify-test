import { applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancer = composeWithDevTools({
    trace: true,
});

export function createMiddlewareChain() {
    const middlewares: Middleware[] = [
        promiseMiddleware
    ];

    return composeEnhancer(applyMiddleware(...middlewares));
}
