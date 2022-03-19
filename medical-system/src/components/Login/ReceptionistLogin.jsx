import React, { Component } from 'react';
import LoginFormComponent from './LoginFormComponent';

class ReceptionistLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {data: "Receptionist"};
    }

    render() {
        return (
            <div>
                <LoginFormComponent dataFromParent = {this.state.data}/>
            </div>
        );
    }
    
}

export default ReceptionistLogin;