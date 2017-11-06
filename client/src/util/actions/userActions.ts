import userApi from '../api/user';
import * as actions from '../const';
import { Dispatch } from 'redux';

let userActionCreators = {
    /*registerUser(user: __CustomTypes.newUser) {
        return (dispatch: Dispatch<{}>) => {
            dispatch({type: actions.REQUEST_USER_REG});
            userApi.register(user).subscribe((res) => {
                if (res.success) {
                    dispatch({
                        type: actions.RECEIVE_USER_REG,
                        payload: res.data
                    });
                }
            });
        }
    },
    loginUser(user: __CustomTypes.loginRequest) {
        return (dispatch: Dispatch<{}>) => {
            dispatch({type: actions.REQUEST_USER_LOGIN});
            userApi.login(user).subscribe((res) => {
                if (res.success) {
                    dispatch({
                        type: actions.RECEIVE_USER_LOGIN,
                        payload: res.token
                    })
                }
            });
        };
    }*/
    getUser() {
        return (dispatch: Dispatch<{}>) => {
            userApi.getUser().subscribe(( res ) => {
                if (res.success) {
                    dispatch({
                        type: actions.RECEIVE_USER,
                        payload: res.data,
                        success: true
                    });
                } else {
                    dispatch({type: actions.AUTHENTICATION_FAILED});
                }
            });
        };
    }
};

export default userActionCreators;