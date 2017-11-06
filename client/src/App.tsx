import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, connect, Dispatch } from 'react-redux';
import Dashboard from './components/dashboard/dashboard';
import Logout from './components/log/logout';
import Signup from './components/signup/signup';
import Navbar from './components/navbar/navbar';
import Login from './components/log/login';
import Home from './components/home/home';
import store from './util/store/store';
import * as React from 'react';
import userActions from './util/actions/userActions';

let stateToProps = (state: __CustomTypes.Store) => {
  return {
    auth: state.user.authenticated
  };
};
let dispatchToProps = (dispatch: Dispatch<{}>) => {
  return {
    getUser: () => dispatch(userActions.getUser())
  };
};
let AppContainer = connect(stateToProps, dispatchToProps)(Navbar as any);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/register" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout}/>
              <Route path="/dashboard" component={Dashboard} />
              <Redirect path="*" to="/" />
            </Switch>
          </AppContainer>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
