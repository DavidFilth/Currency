import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Signup from './components/signup/signup';
import Navbar from './components/navbar/navbar';
import Login from './components/login/login';
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
              <Redirect path="*" to="/" />
            </Switch>
          </Navbar>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
