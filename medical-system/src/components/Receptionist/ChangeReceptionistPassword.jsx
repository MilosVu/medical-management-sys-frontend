
import { Form, Button } from "react-bootstrap"

import { Component, useState } from 'react';
import UserService from "../../services/UserService";



class ChangeReceptionistPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: props.user.firstName, lastName: props.user.lastName,
            username: props.user.username, email: props.user.email,
            password: "", repeatedPassword: "", userRole: "receptionist", userId: props.user.userId, oldPassword: props.user.password, checkOldPassword: "",
            message: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(target + " / tar" + value + "val / " + name);
        this.setState({
            [name]: value
        });
    }


    async handleSubmit(event) {
        if (this.state.checkOldPassword !== this.state.oldPassword) {
            event.preventDefault();
            console.log("Incorrect old password");
            this.setState({
                "message": "Wrong old password!"
            });
            return;

        }
        if (this.state.password !== this.state.repeatedPassword) {
            event.preventDefault();
            console.log("Niste uspesno potvrdili novu lozinku");
            this.setState({
                "message": "Wrong password confirmation!"
            });
            return;
        }
        event.preventDefault();

        console.log('receptionist => ' + JSON.stringify(this.state));

        UserService.createUser(this.state);

        window.location.reload();




    }
    render() {
    return (
        <>
            {console.log(this.props)}
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <h5>Old Password</h5>
                    <Form.Control
                        type="password"
                        placeholder="Type Old Password*"
                        name="checkOldPassword"
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <h5>New Password</h5>
                    <Form.Control
                        type="password"
                        placeholder="Type New Password *"
                        name="password"
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <h5>Confirm New Password</h5>
                    <Form.Control
                        type="password"
                        placeholder="Confirm New Password *"
                        name="repeatedPassword"
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>


                <Button variant="success" type="submit" block='true'>
                    Change Password
                </Button>
            </Form>
            <h5>{this.state.message}</h5>

        </>
    )
    }
}

export default ChangeReceptionistPassword