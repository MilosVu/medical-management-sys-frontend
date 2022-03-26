
import { Form, Button } from "react-bootstrap"

import { useState } from 'react';

import MedicineService from "../../services/MedicineService";

const EditReceptionist = (props) => {

    const user = props.user;

    const [receptionist, setReceptionist] = useState({
        firstName: user.firstName, lastName: user.firstName, username: user.username, password: user.password, email: user.email, userRole: user.userRole
    });

    const onInputChange = (e) => {
        setReceptionist({ ...receptionist, [e.target.firstName]: e.target.value, [e.target.lastName]: e.target.value, [e.target.username]: e.target.value, [e.target.email]: e.target.value })
    }


    const { firstName, lastName, username, password, email, userRole } = receptionist;

    const handleSubmit = (e) => {
        e.preventDefault();
        let receptionist = { firstName, lastName, username, password, email, userRole };
        console.log(receptionist.firstName + " /" + receptionist.lastName);
        //MedicineService.createMedicine(receptionist);

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
                    <h5>Email</h5>
                    <Form.Control
                        type="text"
                        placeholder="Email *"
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>



                <Button variant="success" type="submit" block='true'>
                    Add New Medicine
                </Button>
            </Form>

        </>
    )
}

export default EditReceptionist