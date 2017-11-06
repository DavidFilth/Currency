import AccountList from './accountList';
import * as React from 'react';

export default class Account extends React.Component {
    render() {
        return (
            <div className="content-panel">
                <div className="content-header-wrapper">
                    <h2 className="title">My Accounts</h2>
                    <div className="actions">
                        <button className="btn btn-success">
                            <i className="fa fa-plus"/> Create Account
                        </button>
                    </div>
                </div>
                <AccountList/>
            </div>
        );
    }
}