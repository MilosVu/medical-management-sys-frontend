
import { Form, Button } from "react-bootstrap"

import {useState} from 'react';
import DoctorService from "../../services/DoctorService";
import SpecializationService from "../../services/SpecializationService";

const AddDoctorComponent = () => {

    let [specializations,setSpecializations]=useState(SpecializationService.getSpecializations());

    const [newDoctor, setNewDoctor] = useState({
        firstName:"",lastName:"",username:"", email:"", password:"", fees:"",specializationId:""
    });

    const onInputChange = (e) => {
        setNewDoctor({...newDoctor,[e.target.name]: e.target.value})
    }

    const {firstName,lastName,username, email, password, fees,specializationId} = newDoctor;

    const handleSubmit = (e) => {
        e.preventDefault();
        let doctor={firstName,lastName,username, email, password, fees,specializationId};
          DoctorService.createDoctor(doctor); 
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="First name *"
                    name="firstName"
                    value={firstName}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Last name *"
                    name="lastName"
                    value={lastName}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Username *"
                    name="username"
                    value={username}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Fees"
                    name="fees"
                    value={fees}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>

            <Form.Group>
                <select placeholder="Specialization" name="specializationId" value={specializationId}  onChange = { (e) => onInputChange(e)}>
                {
                    specializations.map(specialization => {
                        <option name={specialization.name} id={specialization.specializationId}>{specialization.name}</option>
                    })
                        
                   
}
                
                </select>
                    
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Doctor
            </Button>
        </Form>
    )
}

export default AddDoctorComponent