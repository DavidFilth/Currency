import http from '../http';

export default (function() {
    let headers = {
        'Content-Type': 'application/json'
    };
    return {
        register(user: __CustomTypes.newUser) {
            return http.post('api/v1/user/register', JSON.stringify(user), headers)
                .map((res) => res.response );
        },
        login(user: __CustomTypes.loginRequest) {
            return http.post('api/v1/user/login', JSON.stringify(user), headers)
                .map((res) => res.response);
        }
    };
})();