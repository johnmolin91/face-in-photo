import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import { app, base } from './base';

const headerStyle = {
  textAlign: 'center'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true
    };
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        })
      } else {
        this.setState({
          authenticated: false,
          loading: false
        })
      }
      })
    }

componentWillmount() {
  this.removeAuthListener();
}

  render() {
    return (
      <div style={{maxWidth: "1160px", margin: "0 auto"}}>
        <BrowserRouter>
          <div style={headerStyle}>
            <Header authenticated={this.state.authenticated} />
            <div className="main-content" style={{padding: "1em"}}>
              <div className="workspace">
                <Route exact path="/login" component={Login}/>
                <Route exact path="/logout" component={Logout}/>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  };
};
  

export default App;
