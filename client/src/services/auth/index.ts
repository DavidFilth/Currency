import * as jwt from 'jsonwebtoken';
export default (function(){
    let auth: boolean = false;
    return {
        isAutenticated: () => auth,
        isSessionOpen: () => {
            let token = sessionStorage.getItem('token');
            if (token) {
                let user = jwt.decode(token.toString());
                auth = true;
                return {success: true, user};
            }
            return {success: false, user: null};
        },
        signOut: () => {
            sessionStorage.removeItem('token');
            auth = false;
        },
        authenticate: (token: string, options?: object) => {
            let user = jwt.decode(token);
            if (user) {
                sessionStorage.setItem('token', token);
                auth = true;
            }
            return {success: auth, user};
        }
    };
})();