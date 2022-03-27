
import { Form, Button } from "react-bootstrap"

import { Component, useState } from 'react';

import DoctorService from "../../services/DoctorService";
import SpecializationService from "../../services/SpecializationService";

async function registerDoctor(doctor) {


    return fetch('http://localhost:8080/api/v1/doctors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(doctor)
    })
        .then(data => data.json())
}

class AddDoctorComponent extends Component {


    constructor(props) {
        super(props);
        this.state = { userRole: "Doctor", specialization: 1, userId: 10000000000 };

        this.handleChange = this.handleChange.bind(this);
        this.changeSpecialization = this.changeSpecialization.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    specializations = [];

    componentDidMount() {
        SpecializationService.getSpecializations().then((res) => {
            this.specializations = res.data;

        });
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(target + " / tar" + value + "val / " + name);
        this.setState({
            [name]: value
        });
    } changeSpecialization

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
        event.preventDefault();
        let specialization2 = await SpecializationService.getSpecializationById(Number(this.state.specialization));
        console.log("SPECIJALIZCIJA" + specialization2);
        this.setState({ specialization: specialization2.data });


        console.log('doctor => ' + JSON.stringify(this.state));

        const response = await registerDoctor(this.state);





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

            <Form onSubmit={this.handleSubmit}>
                <h5>First name</h5>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="First name *"
                        name="firstName"
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>
                <h5>Last name</h5>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Last name *"
                        name="lastName"
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>
                <h5>Username</h5>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Username *"
                        name="username"
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>
                <h5>Email</h5>
                <Form.Group>
                    <Form.Control
                        type="email"
                        placeholder="Email *"
                        name="email"
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>
                <h5>Password</h5>
                <Form.Group>
                    <Form.Control
                        type="password"
                        placeholder="Password *"
                        name="password"
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>
                <h5>Fees</h5>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Fees *"
                        name="fees"
                        onChange={this.handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <h5>Specialization</h5>
                    <Form.Select
                        name="specializationId"
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
                    Add New Doctor
                </Button>
            </Form>

        </>
    )
}
}

export default AddDoctorComponent;