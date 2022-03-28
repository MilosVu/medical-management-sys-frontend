
import { Form, Button } from "react-bootstrap"

import { Component, useState } from 'react';

import PharmaceuticalCompanyService from "../../services/PharmaceuticalCompanyService";



class EditCompany extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.company.name, companyId: props.company.companyId
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    } 

    async handleSubmit(event) {
        event.preventDefault();


        console.log('doctor => ' + JSON.stringify(this.state));

        PharmaceuticalCompanyService.createCompany(this.state)

        window.location.reload();
    }


    render() {
    return (

        <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                />
            </Form.Group>

            <Button variant="success" type="submit" block='true'>
                Edit Company
            </Button>
        </Form>
    )
    }
}

export default EditCompany