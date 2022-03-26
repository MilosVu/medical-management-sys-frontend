
import { Form, Button } from "react-bootstrap"

import { useState } from 'react';

import PharmaceuticalCompanyService from "../../services/PharmaceuticalCompanyService";

const EditCompany = (props) => {



    const [Company, setCompany] = useState({
        companyId: props.company.companyId, name: props.company.name
    });

    const onInputChange = (e) => {
        setCompany({ ...Company, [e.target.name]: e.target.value })
    }

    const { companyId, name } = Company;

    const handleSubmit = (e) => {
        e.preventDefault();
        let company = { companyId, name };
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
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Button variant="success" type="submit" block='true'>
                Edit Company
            </Button>
        </Form>
    )
}

export default EditCompany