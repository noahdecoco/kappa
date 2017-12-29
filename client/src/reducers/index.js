import { combineReducers } from 'redux';

import authReducer from './authReducer';
import tasksReducer from './tasksReducer';
import { reducer as formReducer } from 'redux-form';

const combinedReducers = combineReducers({
    auth: authReducer,
    tasks: tasksReducer,
    form: formReducer
});

export default combinedReducers;
