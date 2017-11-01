import PrivateRoute from './components/privateRoute/privateRoute';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Signup from './components/signup/signup';
import Navbar from './components/navbar/navbar';
import Logout from './components/userLog/logout';
import Login from './components/userLog/login';
import Home from './components/home/home';

import * as React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
          <Navbar>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/register" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout}/>
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </Navbar>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
