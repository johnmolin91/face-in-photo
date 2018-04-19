import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Header } from '../../components/Header';
import { app, base } from '../../base';

const loginStyles = {
    width: "90%",
    maxWidth: "315px",
    margin: "20px auto",
    border: "1px solid blue",
    borderRadius: "5px",
    padding: "10px"
};

class Login extends Component {
    constructor(props) {
        super(props)
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
        this.state = {
          redirect: false
        }
    }

    authWithEmailPassword(event) {
      event.preventDefault()
  
      const email = this.emailInput.value
      const password = this.passwordInput.value
  
      app.auth().fetchProvidersForEmail(email)
        .then((providers) => {
          if (providers.length === 0) {
            // create user
            return app.auth().createUserWithEmailAndPassword(email, password)
          } else {
            // sign in with email/password
            return app.auth().signInWithEmailAndPassword(email, password)
          }
        })
        .then((user) => {
          if (user && user.email) {
            this.setState({ redirect: true })
          }
        })
    }


    render() {
      if (this.state.redirect === true) {
        return <Redirect to='/' />
      }
        return (
          <div style={loginStyles}>
            <form onSubmit={(event) => this.authWithEmailPassword(event)}>
              <div style={{marginBottom: "10px"}} className="pt-callout pt-icon-info-sign">
                <h5>Note</h5>
                If you don't have an account already, this form will create your account.
              </div>
              <label className="pt-label">
                Email
                <input style={{width: "100%"}} className="pt-input" name="email" type="email" ref={(input) => {this.emailInput = input}}></input>
              </label>
              <label className="pt-label">
                Password
                <input style={{width: "100%"}} className="pt-input" name="password" type="password" ref={(input) => {this.passwordInput = input}}></input>
              </label>
              <input style={{width: "100%"}} type="submit" className="pt-button pt-intent-primary" value="Log In"></input>
            </form>
          </div>
        )
      }
    }

export default Login;