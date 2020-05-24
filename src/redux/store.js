import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from ''
const sagaMiddleware = createSagaMiddleware(); 

const middlewares = [sagaMiddleware];

const reduxDevExt = process.env.NODE_ENV === 'development' &&
window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop;


export const store = createStore(rootReducer, compose(
    applyMiddleware(...middlewares),
    reduxDevExt
));

export default store;