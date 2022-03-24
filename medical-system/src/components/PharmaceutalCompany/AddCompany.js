
import { Form, Button } from "react-bootstrap"

import {useState} from 'react';

import PharmaceuticalCompanyService from "../../services/PharmaceuticalCompanyService";

const AddCompany = () => {

    

    const [newCompany, setNewCompany] = useState({
        name:""
    });

    const onInputChange = (e) => {
        setNewCompany({...newCompany,[e.target.name]: e.target.value})
    }

    const {name} = newCompany;

    const handleSubmit = (e) => {
        e.preventDefault();
        let company={name};
          PharmaceuticalCompanyService.createCompany(company); 
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            
            <Button variant="success" type="submit" block='true'>
                Add New Pharmaceutical Company
            </Button>
        </Form>
    )
}

export default AddCompany