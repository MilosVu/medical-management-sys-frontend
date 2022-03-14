import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div className='App-header'>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                        <div className="container">

                            <a href="#" className="navbar-brand"><h4><i className="fa fa-user-plus" aria-hidden="true"></i>Hospital management system</h4></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li>
                                        <a href="#">
                                            <h6>Home</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <h6>About us</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <h6>Contact</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;