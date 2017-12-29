import {
    CREATE_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    FETCH_TASKS
} from '../actions/types';

const tasksReducer = (state = [], actions) => {
    switch (actions.type) {
        case CREATE_TASK:
            return [actions.payload, ...state];
        case DELETE_TASK:
            return state.filter(item => actions.payload._id !== item._id);
        case FETCH_TASKS:
            return actions.payload || [];
        case UPDATE_TASK:
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

export default tasksReducer;
