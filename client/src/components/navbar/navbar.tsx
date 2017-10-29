import * as React from 'react';
import { NavLink } from 'react-router-dom';
// import { Nav, NavItem,  NavLink } from 'reactstrap';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="container" >
        <header className="header clearfix">
        <nav>
          <ul className="nav nav-pills float-right">
            <li className="nav-item">
              <NavLink exact={true} className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register" >Sign up</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" >Log in</NavLink>
            </li>
          </ul>
        </nav>
        <h3 className="text-muted">Currency App</h3>
      </header>
      {this.props.children}
      </div>
    );
  }
}