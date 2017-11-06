import * as update from 'immutability-helper';
import * as actions from '../const';

let initialState = {
    data: {},
    authenticated: true
};
const userReducer = (state = initialState, action: __CustomTypes.Action) => {
    switch (action.type) {
        case actions.RECEIVE_USER:
            return update(state, {
                data: {$set: action.payload},
                authenticated: {$set: true}
            });
        case actions.AUTHENTICATION_FAILED:
            return update(state, { authenticated: {$set: false}});
        default:
            return state;
    }
};
export default userReducer;