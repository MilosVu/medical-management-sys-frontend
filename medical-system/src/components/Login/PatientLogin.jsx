import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginFormComponent from './LoginFormComponent';

class PatientLogin extends Component {

    constructor(props) {
        super(props);
        this.state = { data: "patient" };
    }

    render() {
        return (
            <div>
                <LoginFormComponent userRole={this.state.data} />
            </div>
        );
    }
}

export default PatientLogin;