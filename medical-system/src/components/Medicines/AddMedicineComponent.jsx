
import { Form, Button } from "react-bootstrap"

import { useState } from 'react';

import MedicineService from "../../services/MedicineService";

const AddMedicineComponent = (props) => {

    const allCompanies = [] = props.companies;
    const [newMedicine, setNewMedicine] = useState({
        name: "", pharmaceuticalCompany: allCompanies[0]
    });

    const onInputChange = (e) => {
        setNewMedicine({ ...newMedicine, [e.target.name]: e.target.value, [e.target.pharmaceuticalCompany]: e.target.value })
    }


    const { name, pharmaceuticalCompany } = newMedicine;

    const handleSubmit = (e) => {
        e.preventDefault();
        let medicine = { name, pharmaceuticalCompany };
        console.log(medicine.name + " /" + medicine.pharmaceuticalCompany);
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
                        value={pharmaceuticalCompany}
                        onChange={(e) => onInputChange(e)}


                    >
                        {
                            props.companies.map(company =>
                                <option key={company.companyId} value={company.name} name={company.name} >{company.name}</option>
                            )

                        }
                    </Form.Select>
                </Form.Group>

                <Button variant="success" type="submit" block='true'>
                    Add New Medicine
                </Button>
            </Form>

        </>
    )
}

export default AddMedicineComponent