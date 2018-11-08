import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            ...createForms ({
                form: ''
            })
        }),
    );
    return store;
}