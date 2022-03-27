import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundComponent extends Component {
    render() {
        return (
            <div className='row main-dashboard-container'>
                <h1>404 - Page Not Found!</h1>
                <Link to="/">Go Home</Link>
            </div>
        );
    }
}

export default NotFoundComponent;