import { Redirect } from 'react-router-dom';
import * as React from 'react';

class Logout extends React.Component {
    render() { return (<Redirect to="/" />); }
}

export default Logout;