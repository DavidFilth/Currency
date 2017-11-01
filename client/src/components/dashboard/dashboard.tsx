import * as React from 'react';
import SideBar from './sideBar';
import './dashboard.css';
import AccountList from './accountList';

export default class Dassboard extends React.Component {
    render() {
        return (
                <div className="view-account">
                    <SideBar/>
                    <AccountList />
                </div>
        );
    }
}