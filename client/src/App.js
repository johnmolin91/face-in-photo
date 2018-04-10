import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import { app, base } from './base';

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
    };
  }

  componentDidMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true
        })
      } else {
        this.setState({
          authenticated: false
        })
      }
      })
    }

componentWillUnmount() {
  this.removeAuthListener();
}

  render() {
    return (
      <div style={{maxWidth: "1160px", margin: "0 auto"}}>
        <BrowserRouter>
          <div>
              {/*<Header authenticated={this.state.authenticated} /> */}
              <div className="main-content" style={{padding: "1em"}}>
                <div className="workspace">
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                </div>
              </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
