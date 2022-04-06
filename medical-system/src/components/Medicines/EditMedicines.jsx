
import { Form, Button } from "react-bootstrap"

import { Component, useState } from 'react';

import DoctorService from "../../services/DoctorService";
import SpecializationService from "../../services/SpecializationService";
import PharmaceuticalCompanyService from "../../services/PharmaceuticalCompanyService";
import MedicineService from "../../services/MedicineService";



class EditMedicines extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.medicine.name,
            company: props.medicine.pharmaceuticalCompany.companyId,
            companies: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.changeCompany = this.changeCompany.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        PharmaceuticalCompanyService.getCompanies().then((res) => {
            this.setState({
                "companies": res.data
            });
        });

        console.log(this.state.specializations);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(target + " / tar" + value + "val / " + name);
        this.setState({
            [name]: value
        });
    }

    changeCompany(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(value);
        this.setState({
            company: value
        });
    }
    async handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        let comp2 = await PharmaceuticalCompanyService.getCompanyById(Number(this.state.company));

        this.setState({ company: comp2.data });


        console.log('medicine => ' + JSON.stringify(this.state));

        const response = await MedicineService.createMedicine(this.state);

        //window.location.reload();
    }
    render() {
        return (
            <>
                {console.log(this.props)}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <h5>First name</h5>
                        <Form.Control
                            type="text"
                            placeholder="Name *"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>


                    <Form.Group>
                        <h5>Company</h5>
                        <Form.Select
                            name="companyId"
                            value={this.state.company}
                            onChange={this.changeCompany}


                        >
                            {
                                this.state.companies.map(company =>
                                    <option key={company.companyId} value={company.companyId} name={company.name} >{company.name}</option>
                                )

                            }
                        </Form.Select>
                    </Form.Group>

                    <Button variant="success" type="submit" block='true'>
                        Edit Company
                    </Button>
                </Form>

            </>
        )
    }
}

export default EditMedicines