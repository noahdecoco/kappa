import axios from 'axios';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current-user');
    dispatch({ type: 'FETCH_USER', payload: res.data });
};

export const submitTodo = values => async dispatch => {
    const res = await axios.post('/api/todos', values);
    dispatch({ type: 'ADD_TODO', payload: res.data });
};

export const fetchTodos = () => async dispatch => {
    const res = await axios.get('/api/todos');
    dispatch({ type: 'FETCH_TODOS', payload: res.data });
};

export const updateTodo = (id, values) => async dispatch => {
    const res = await axios.patch(`/api/todos/${id}`, values);
    dispatch({ type: 'UPDATE_TODO', payload: res.data });
};

export const deleteTodo = id => async dispatch => {
    const res = await axios.delete(`/api/todos/${id}`);
    dispatch({ type: 'DELETE_TODO', payload: res.data });
};
