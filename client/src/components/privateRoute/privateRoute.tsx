import { Route, Redirect } from 'react-router-dom';
import auth from '../../services/auth';

import * as React from 'react';

export default class PrivateRoute extends React.Component<{path: string, component: React.ComponentClass }> {
    render() {
        return(
            <Route
                path={this.props.path}
                render={(props) => (
                    auth.isAutenticated() ? <this.props.component {...props} /> :
                    <Redirect to="/login"/>
                )}  
            />
        );
    }
}