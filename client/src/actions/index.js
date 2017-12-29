import axios from 'axios';

import {
    FETCH_USER,
    CREATE_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    FETCH_TASKS
} from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current-user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const createTask = values => async dispatch => {
    const res = await axios.post('/api/tasks', values);
    dispatch({ type: CREATE_TASK, payload: res.data });
};

export const fetchTasks = () => async dispatch => {
    const res = await axios.get('/api/tasks');
    dispatch({ type: FETCH_TASKS, payload: res.data });
};

export const updateTask = (id, values) => async dispatch => {
    const res = await axios.patch(`/api/tasks/${id}`, values);
    dispatch({ type: UPDATE_TASK, payload: res.data });
};

export const deleteTask = id => async dispatch => {
    const res = await axios.delete(`/api/tasks/${id}`);
    dispatch({ type: DELETE_TASK, payload: res.data });
};
