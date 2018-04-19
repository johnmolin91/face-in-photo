import React, { Component }  from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

const title = {
    fontSize: 36
}

const regLog = {
    float: 'right',
    fontSize: 24,
    padding: 20
}

const searchStyle = {
    fontSize: 24
}

class Header extends Component {
    render() {
        return (
            <div style={title}>
                <BrowserRouter>
                    <nav className="pt-navbar">
                        <div className="pt-navbar-group pt-align-left">
                            <div className="pt-navbar-heading">FaceNFoto</div>
                        </div>
                        {this.props.authenticated
                            ? <input style={searchStyle} className="pt-input" placeholder="Search" type="text" />
                        : null
                        }
                        {
                            this.props.authenticated
                            ? (
                        <div style={regLog} className="pt-navbar-group pt-align-right">
                            <span className="pt-navbar-divider"></span>
                            <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout" onClick="window.location.reload()">Logout</Link>
                        </div>)
                            : (
                        <div style={regLog} className="pt-navbar-group pt-align-right">
                            <Link className="pt-button pt-intent-primary" to="/login" onClick="window.location.reload()">Register/Login</Link>
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