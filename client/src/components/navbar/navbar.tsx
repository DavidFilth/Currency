import OptionallyDisplayed from '../util/optionallyDisplayed';
import { NavLink } from 'react-router-dom';
import auth from '../../services/auth';
import * as React from 'react';

export default class Navbar extends React.Component {
  componentWillMount() {
    auth.isSessionOpen();
  }
  render() {
    let authenticated = auth.isAutenticated();
    return (
      <div className="container" >
        <header className="header clearfix">
        <nav>
          <ul className="nav nav-pills float-right">
            <li className="nav-item">
              <NavLink exact={true} className="nav-link" to="/">Home</NavLink>
            </li>
            <OptionallyDisplayed display={!authenticated} >
              <li className="nav-item">
                <NavLink className="nav-link" to="/register" >Sign up</NavLink>
              </li>
            </OptionallyDisplayed>
            <OptionallyDisplayed display={!authenticated}>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" >Log in</NavLink>
              </li>
            </OptionallyDisplayed>
            <OptionallyDisplayed display={authenticated}>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard" >Dashboard</NavLink>
              </li>
            </OptionallyDisplayed>
            <OptionallyDisplayed display={authenticated}>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout" >Log out</NavLink>
              </li>
            </OptionallyDisplayed>
          </ul>
        </nav>
        <h3 className="text-muted">Currency App</h3>
      </header>
      {this.props.children}
      </div>
    );
  }
}