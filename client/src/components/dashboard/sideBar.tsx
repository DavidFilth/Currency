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
                            <a href="#"><span className="fa fa-user"/> Profile</a>
                        </li>
                        <li>
                            <a href="#"><span className="fa fa-cog"/> Settings</a>
                        </li>
                        <li className="active">
                            <a href="#"><span className="fa fa-credit-card"/> Billing</a>
                        </li>
                        <li>
                            <a href="#"><span className="fa fa-envelope"/> Messages</a>
                        </li>
                        <li>
                            <a href="user-drive.html"><span className="fa fa-th"/> Drive</a>
                        </li>
                        <li>
                            <a href="#"><span className="fa fa-clock-o"/> Reminders</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}