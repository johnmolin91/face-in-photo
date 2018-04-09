import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
    };
  }

  render() {
    return (
      <div style={{maxWidth: "1160px", margin: "0 auto"}}>
        <BrowserRouter>
          <div>
              {/*<Header authenticated={this.state.authenticated} /> */}
              <div className="main-content" style={{padding: "1em"}}>
                <div className="workspace">
                  <Home />
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
