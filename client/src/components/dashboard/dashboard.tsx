import { Route } from 'react-router-dom';
import Account from './accounts';
import SideBar from './sideBar';
import * as React from 'react';
import './dashboard.css';

export default class Dassboard extends React.Component {
    render() {
        return (
                <div className="view-account">
                    <SideBar/>
                    <Route path="/dashboard" component={Account} exact={true} />
                </div>
        );
    }
}