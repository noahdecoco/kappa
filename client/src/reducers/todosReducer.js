import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    FETCH_TODOS
} from '../actions/types';

const todosReducer = (state = [], actions) => {
    switch (actions.type) {
        case ADD_TODO:
            return [actions.payload, ...state];
        case DELETE_TODO:
            return state.filter(item => actions.payload._id !== item._id);
        case FETCH_TODOS:
            return actions.payload || [];
        case UPDATE_TODO:
            return state.map(item => {
                if (actions.payload._id === item._id) {
                    return actions.payload;
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
};

export default todosReducer;
