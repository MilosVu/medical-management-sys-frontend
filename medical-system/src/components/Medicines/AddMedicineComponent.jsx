
import { Form, Button } from "react-bootstrap"

import { useState } from 'react';

import PharmaceuticalCompanyService from "../../services/PharmaceuticalCompanyService";
import MedicineService from "../../services/MedicineService";

const AddMedicineComponent = (props) => {


    const [newMedicine, setNewMedicine] = useState({
        name: "", company: ""
    });

    const onInputChange = (e) => {
        setNewMedicine({ ...newMedicine, [e.target.name]: e.target.value, [e.target.company]: e.target.value })
    }

    const changeCompanyHandler = (event) => {
        this.setNewMedicine({ company: event.target.value });
    }

    const { name, company } = newMedicine;

    const handleSubmit = (e) => {
        e.preventDefault();
        let medicine = { name, company };
        MedicineService.createMedicine(medicine);
    }

    return (
        <>

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

                <Form.Group>
                    <Form.Select
                        name="pharmaceuticalCompany"
                        value={company}
                        onChange={(e) => changeCompanyHandler(e)}

                    >
                        {
                            props.companies.map(company =>
                                <option value={company.name} name={company.name} id={company.companyId}>{company.name}</option>
                            )

                        }
                    </Form.Select>
                </Form.Group>

                <Button variant="success" type="submit" block='true'>
                    Add New Pharmaceutical Company
                </Button>
            </Form>

        </>
    )
}

export default AddMedicineComponent