import React, { Component } from 'react';
import withAuth from '../../withAuth';

class PatientDashboard extends Component {
    render() {
        return (
            <div>
                <h1>This is patient dashboard!</h1>
            </div>
        );
    }
}

export default withAuth(PatientDashboard);