
import { Form, Button } from "react-bootstrap"

import { Component, useState } from 'react';
import UserService from "../../services/UserService";


async function editReceptionist(receptionist) {


    return fetch('http://localhost:8080/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(receptionist)
    })
        .then(data => data.json())
}

class EditReceptionist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: props.user.userId,
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            username: props.user.username,
            email: props.user.email,
            password: props.user.password,
            userRole: "receptionist",
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
        event.preventDefault();

        console.log('receptionist => ' + JSON.stringify(this.state));

        UserService.createUser(this.state);

        window.location.reload();



        // console.log(token);
        // if (token.length !== 0) {
        //     setToken(token);
        // } else {
        //     alert("Wrong username or password")
        // }

    }
    render() {
    return (
        <>
            {console.log(this.props)}
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <h5>First name</h5>
                    <Form.Control
                        type="text"
                        placeholder="First name *"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <h5>Last name</h5>
                    <Form.Control
                        type="text"
                        placeholder="Last name *"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <h5>Username</h5>
                    <Form.Control
                        type="text"
                        placeholder="Username *"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <h5>Email</h5>
                    <Form.Control
                        type="email"
                        placeholder="Email *"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>



                <Button variant="success" type="submit" block='true'>
                    Edit Receptionist
                </Button>
            </Form>

        </>
    )
    }
}

export default EditReceptionist