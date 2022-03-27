
import { Form, Button } from "react-bootstrap"

import { useState } from 'react';

import DoctorService from "../../services/DoctorService";

const AddDoctorComponent = (props) => {

    const allSpecializations = [] = props.specializations;
    const [newDoctor, setNewDoctor] = useState({
        firstName: "", 
        lastName: "", 
        username: "", 
        email: "", 
        password: "", 
        fees: "", 
    });

    const onInputChange = (e) => {
        console.log(e);
        setNewDoctor({
            ...newDoctor, 
            [e.target.firstName]: e.target.value, 
            [e.target.lastName]: e.target.value, 
            [e.target.username]: e.target.value, 
            [e.target.email]: e.target.value, 
            [e.target.fees]: e.target.value, 
        })
    }


    // const { firstName, lastName, username, email, password, fees} = newDoctor;
    const firstName = "test";
    const lastName = "test";
    const username = "test";
    const email = "test";
    const password = "test";
    const fees = "test";

    const handleSubmit = (e) => {
        e.preventDefault();
        let doctor = { firstName, lastName, username, email, password, fees};
        console.log(doctor.firstName + " /" + doctor.specializationId);
        //DoctorService.createDoctor(doctor);
    }

    return (
        <>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="First name *"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Last name *"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Username *"
                        name="username"
                        value={username}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="password"
                        placeholder="Password *"
                        name="password"
                        value={password}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Fees *"
                        name="fees"
                        value={fees}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>

                

                <Button variant="success" type="submit" block='true'>
                    Add New Doctor
                </Button>
            </Form>

        </>
    )
}

export default AddDoctorComponent