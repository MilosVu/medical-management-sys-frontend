
import { Form, Button } from "react-bootstrap"

import { Component, useState } from 'react';

import DoctorService from "../../services/DoctorService";
import SpecializationService from "../../services/SpecializationService";

async function editDoctor(doctor) {


    return fetch('http://localhost:8080/api/v1/doctors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(doctor)
    })
        .then(data => data.json())
}

class EditDoctor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: props.doctor.firstName, lastName: props.doctor.lastName,
            username: props.doctor.username, email: props.doctor.email, fees: props.doctor.fees,
            password: props.doctor.password, specialization: props.doctor.specialization.specializationId, userRole: "doctor", userId: props.doctor.userId,
            specializations: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.changeSpecialization = this.changeSpecialization.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        SpecializationService.getSpecializations().then((res) => {

            this.setState({
                "specializations": res.data
            });
        });
        console.log(this.state.specializations);
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

    changeSpecialization(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(value);
        this.setState({
            specialization: value
        });
    }
    async handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        let specialization2 = await SpecializationService.getSpecializationById(Number(this.state.specialization));
        console.log("SPECIJALIZCIJA" + specialization2);
        this.setState({ specialization: specialization2.data });


        console.log('doctor => ' + JSON.stringify(this.state));

        const response = await editDoctor(this.state);

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
                    <h5>Fees</h5>
                    <Form.Control
                        type="number"
                        placeholder="Fees *"
                        name="fees"
                        value={this.state.fees}
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <h5>Specialization</h5>
                    <Form.Select
                        name="specializationId"
                        value={this.state.specialization}
                        onChange={this.changeSpecialization}


                    >
                        {
                            this.props.specializations.map(specialization =>
                                <option key={specialization.specializationId} value={specialization.specializationId} name={specialization.name} >{specialization.name}</option>
                            )

                        }
                    </Form.Select>
                </Form.Group>

                <Button variant="success" type="submit" block='true'>
                    Edit Doctor
                </Button>
            </Form>

        </>
    )
    }
}

export default EditDoctor