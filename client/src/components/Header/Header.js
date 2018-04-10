import React, { Component }  from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav className="pt-navbar">
                    <div className="pt-navbar-group pt-align-left">
                        <div className="pt-navbar-heading">Face-in-Foto</div>
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
                        <button className="pt-button pt-minimal pt-icon-user"></button>
                        <button className="pt-button pt-minimal pt-icon-cog"></button>
                    </div>)
                    :   (
                    <div className="pt-navbar-group pt-align-right">
                        <Link className="pt-button pt-intent-primary" to="/login">Register/Login</Link>
                    </div>
                        )
                    }
                </nav>
            </BrowserRouter>
        )
    }
}

export default Header;