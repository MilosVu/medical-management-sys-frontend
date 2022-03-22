import React, { Component } from 'react';
import LoginFormComponent from './LoginFormComponent';

class ReceptionistLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {data: "receptionist"};
    }

    render() {
        return (
            <div>
                <LoginFormComponent userRole = {this.state.data}/>
            </div>
        );
    }
    
}

export default ReceptionistLogin;