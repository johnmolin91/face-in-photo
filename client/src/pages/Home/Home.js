import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <nav className="pt-navbar">
                <div className="pt-navbar-group pt-align-left">
                    <div className="pt-navbar-heading">Face-in-Foto</div>
                </div>
                <div className="pt-navbar-group pt-align-right">
                    <span className="pt-navbar-divider"></span>
                    <button className="pt-button pt-minimal pt-icon-user"></button>
                    <button className="pt-button pt-minimal pt-icon-cog"></button>
                </div>
            </nav>
        );
    }
}

export default Home;