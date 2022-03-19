import React, { Component } from 'react';
import LoginFormComponent from './LoginFormComponent';

class DoctorLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {data: "Doctor"};
    }

    render() {
        return (
            <div>
                <LoginFormComponent dataFromParent = {this.state.data}/>
            </div>
        );
    }
}

export default DoctorLogin;