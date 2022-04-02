
import { Form, Button } from "react-bootstrap"

import { Component, useState } from 'react';

import DoctorService from "../../services/DoctorService";
import SpecializationService from "../../services/SpecializationService";

async function editPatient(patient) {


    return fetch('http://localhost:8080/api/v1/patients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
        .then(data => data.json())
}

class EditPatient extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: props.user.userId,
            firstName: props.user.firstName, lastName: props.user.lastName,
            username: props.user.username, email: props.user.email,
            password: props.user.password, userRole: "patient", userId: props.user.userId, contact: props.user.contact, allergies: props.user.allergies, gender: props.user.gender
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

        console.log('patient => ' + JSON.stringify(this.state));

        const response = await editPatient(this.state);

        window.location.reload();

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
                    <Form.Group>
                        <h5>Contact</h5>
                        <Form.Control
                            type="text"
                            placeholder="Contact *"
                            name="contact"
                            value={this.state.contact}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <h5>Allergies</h5>
                        <Form.Control
                            type="text"
                            placeholder="Allergies *"
                            name="allergies"
                            value={this.state.allergies}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <h5>Gender</h5>
                        <label className="radio inline"> <Form.Control
                            type="radio"
                            placeholder="Gender *"
                            name="gender"
                            value="Male"
                            onChange={this.handleChange}

                        /><span> Male </span></label>
                        <label className="radio inline"><Form.Control
                            type="radio"
                            placeholder="Gender *"
                            name="gender"
                            value="Female"
                            onChange={this.handleChange}

                        /><span> Female </span>
                        </label>
                    </Form.Group>






                    <Button variant="success" type="submit" block='true'>
                        Edit Doctor
                    </Button>
                </Form>

            </>
        )
    }
}

export default EditPatient