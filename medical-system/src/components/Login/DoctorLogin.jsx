import React, { Component } from 'react';
import LoginFormComponent from './LoginFormComponent';

class DoctorLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {data: "doctor"};
    }

    render() {
        return (
            <div>
                <LoginFormComponent userRole = {this.state.data}/>
            </div>
        );
    }
}

export default DoctorLogin;