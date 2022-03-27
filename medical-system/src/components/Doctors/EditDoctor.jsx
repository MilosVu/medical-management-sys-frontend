
import { Form, Button } from "react-bootstrap"

import { useState } from 'react';

import DoctorService from "../../services/DoctorService";

const EditDoctor = (props) => {

    const doctor = props.doctor;
    const [Doctor, setDoctor] = useState({
        firstName: doctor.firstName, lastName: doctor.lastName, username: doctor.username, email: doctor.email, password: doctor.password, fees: doctor.fees, specializationId: doctor.specialization
    });

    const onInputChange = (e) => {
        setDoctor({
            ...Doctor, [e.target.firstName]: e.target.value, [e.target.lastName]: e.target.value, [e.target.username]: e.target.value, [e.target.email]: e.target.value, [e.target.password]: e.target.value, [e.target.fees]: e.target.value, [e.target.specializationId]: e.target.value
        })
    }


    const { firstName, lastName, username, email, password, fees, specializationId } = Doctor;

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
                    <h5>First name</h5>
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
                    <h5>Last name</h5>
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
                    <h5>Username</h5>
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
                    <h5>Fees</h5>
                    <Form.Control
                        type="number"
                        placeholder="Fees *"
                        name="fees"
                        value={fees}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <h5>Specialization</h5>
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
                    Edit Doctor
                </Button>
            </Form>

        </>
    )
}

export default EditDoctor