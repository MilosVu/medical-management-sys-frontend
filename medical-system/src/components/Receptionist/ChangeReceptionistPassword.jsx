
import { Form, Button } from "react-bootstrap"

import { useState } from 'react';


const ChangeReceptionistPassword = (props) => {

    const user = props.user;

    const [receptionist, setReceptionist] = useState({
        password: "", password2: "", firstName: user.firstName, lastName: user.lastName, username: user.username, userRole: user.userRole
    });

    const onInputChange = (e) => {
        setReceptionist({ ...receptionist, [e.target.password]: e.target.value, [e.target.password2]: e.target.value })
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
                    <h5>Password</h5>
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
                    <h5>Repeat password</h5>
                    <Form.Control
                        type="password"
                        placeholder="Password *"
                        name="password"
                        value={password}
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

export default ChangeReceptionistPassword