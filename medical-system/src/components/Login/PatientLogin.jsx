import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginFormComponent from './LoginFormComponent';

class PatientLogin extends Component {

    constructor(props) {
        super(props);
        this.state = { data: "Patient" };
    }

    render() {
        return (
            <div>
                <LoginFormComponent dataFromParent={this.state.data} />
            </div>
        );
    }
}

export default PatientLogin;