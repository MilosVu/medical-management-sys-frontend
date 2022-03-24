
import { Form, Button } from "react-bootstrap"

import { useState } from 'react';

import DoctorService from "../../services/DoctorService";

const AddDoctorComponent = (props) => {

    const allSpecializations = [] = props.specializations;
    const [newDoctor, setNewDoctor] = useState({
        firstName: "", lastName: "", username: "", email: "", password: "", fees: "", specializationId: allSpecializations[0]
    });

    const onInputChange = (e) => {
        setNewDoctor({
            ...newDoctor, [e.target.firstName]: e.target.value, [e.target.lastName]: e.target.value, [e.target.username]: e.target.value, [e.target.email]: e.target.value, [e.target.fees]: e.target.value, [e.target.specializationId]: e.target.value
        })
    }


    const { firstName, lastName, username, email, password, fees, specializationId } = newDoctor;

    const handleSubmit = (e) => {
        e.preventDefault();
        let doctor = { firstName, lastName, username, email, password, fees, specializationId };
        console.log(doctor.firstName + " /" + doctor.specializationId);
        DoctorService.createDoctor(doctor);
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

                <Form.Group>
                    <Form.Select
                        name="specializationId"
                        value={specializationId}
                        onChange={(e) => onInputChange(e)}


                    >
                        {
                            props.specializations.map(specialization =>
                                <option key={specialization.specializationId} value={specialization.name} name={specialization.name} >{specialization.name}</option>
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

export default AddDoctorComponent