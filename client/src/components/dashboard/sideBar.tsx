import { NavLink } from 'react-router-dom';
import * as React from 'react';

export default class SideBar extends React.Component {
    render() {
        return (
            <div className="side-bar">
                <div className="user-info">
                    <img
                        className="img-profile img-circle img-responsive center-block" 
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    />
                    <ul className="meta list list-unstyled">
                        <li className="name">
                            Rebecca Sanders
                            <label className="label label-info">UX Designer</label>
                        </li>
                        <li className="email">
                            <a href="#"> a@b.com</a>
                        </li>
                        <li className="activity">
                            Last logged in: Today at 2:18pm
                        </li>
                    </ul>
                </div>
                <nav className="side-menu">
                    <ul className="nav">
                        <li>
                            <NavLink to="/dashboard/profile"><i className="fa fa-user"/> Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/settings"><i className="fa fa-cog"/> Settings</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" ><i className="fa fa-credit-card"/> Accounts</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/currency"><i className="fa fa-money"/> Currency</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}