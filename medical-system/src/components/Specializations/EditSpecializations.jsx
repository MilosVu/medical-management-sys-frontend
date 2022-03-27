
import { Form, Button } from "react-bootstrap"

import { Component, useState } from 'react';

import PharmaceuticalCompanyService from "../../services/PharmaceuticalCompanyService";
import SpecializationService from "../../services/SpecializationService";



class EditSpecializations extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.specialization.name, specializationId: props.specialization.specializationId
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


        SpecializationService.createSpecialization(this.state);

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
                    Add Specialization
                </Button>
            </Form>
        )
    }
}

export default EditSpecializations