import { combineReducers } from 'redux';

import authReducer from './authReducer';
import todosReducer from './todosReducer';
import { reducer as formReducer } from 'redux-form';

const combinedReducers = combineReducers({
    auth: authReducer,
    todos: todosReducer,
    form: formReducer
});

export default combinedReducers;
