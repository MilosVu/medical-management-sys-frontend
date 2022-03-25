import React, { Component } from 'react';


function logout(){
  alert("Goodbye");
  localStorage.clear();
  window.location.reload();
}

class NavbarComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">

              <a className="navbar-brand js-scroll-trigger" href="/"><h4><i className="fa fa-user-plus" aria-hidden="true"></i>&nbsp; Medical Management System</h4></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">

                  <li className="nav-item">
                    <button type="button" className="btn btn-light" onClick={logout}>Logout</button>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default NavbarComponent;