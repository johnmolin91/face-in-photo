import React, { Component }  from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

const title = {
    fontSize: 36
}

class Header extends Component {
    render() {
        return (
            <div style={title}>
                <BrowserRouter>
                    <nav className="pt-navbar">
                        <div className="pt-navbar-group pt-align-left">
                            <div className="pt-navbar-heading">Title</div>
                        </div>
                        {this.props.authenticated
                            ? <input className="pt-input" placeholder="Search" type="text" />
                        : null
                        }
                        {
                            this.props.authenticated
                            ? (
                        <div className="pt-navbar-group pt-align-right">
                            <span className="pt-navbar-divider"></span>
                            <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout">Logout</Link>
                        </div>)
                            : (
                        <div className="pt-navbar-group pt-align-right">
                            <Link className="pt-button pt-intent-primary" to="/login">Register/Login</Link>
                        </div>
                        )
                        }
                    </nav>
                </BrowserRouter>
            </div>
        )
    }
}

export default Header;