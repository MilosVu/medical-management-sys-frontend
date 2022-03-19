import React, { Component } from 'react';

class NavbarComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">

            {/* <Link to="/register">
                            <p>Already have an account?</p>
                        </Link> */}
        
              <a className="navbar-brand js-scroll-trigger" href="/"><h4><i className="fa fa-user-plus" aria-hidden="true"></i>&nbsp; GLOBAL HOSPITALS</h4></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="index.php"><h6>HOME</h6></a>
                  </li>
          
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="services.html"><h6>ABOUT US</h6></a>
                  </li>
        
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="contact.html"><h6>CONTACT</h6></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default NavbarComponent;