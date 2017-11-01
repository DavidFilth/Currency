import { Redirect } from 'react-router-dom';
import * as React from 'react';
import auth from '../../services/auth';

const Logout = () => {
    auth.signOut();
    return (<Redirect to="/" />);
};

export default Logout;