import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundComponent extends Component {
    render() {
        return (
            <div>
                <h2>TEST</h2>
                <h1>404 - Page Not Found!</h1>
                <Link to="/">Go Home</Link>
            </div>
        );
    }
}

export default NotFoundComponent;