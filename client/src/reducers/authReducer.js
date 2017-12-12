import { FETCH_USER } from '../actions/types';

const authReducer = (state = null, actions) => {
    switch (actions.type) {
        case FETCH_USER:
            return actions.payload || {};
        default:
            return state;
    }
};

export default authReducer;
