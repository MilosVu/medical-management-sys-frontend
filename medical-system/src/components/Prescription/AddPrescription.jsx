
import { Form, Button } from "react-bootstrap"

import { Component, useState } from 'react';


import PrescriptionService from "../../services/PrescriptionService";

import MultiSelect from 'multiselect-react-dropdown';





class AddPrescription extends Component {


    constructor(props) {
        super(props);
        this.state = { medicine: this.props.medicines, examination: this.props.examination, prescriptionId: 9999, selectedMedicines: [] };

        this.handleChange = this.handleChange.bind(this);
        this.changeMedicines = this.changeMedicines.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    changeMedicines(event) {
        console.log("aaaaaaaaa");

        let value2 = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );

        console.log(value2);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(value);
        this.setState({
            medicine: value2
        });
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


    handleSubmit(event) {
        event.preventDefault();



        console.log('prescribe => ' + JSON.stringify(this.state));



        PrescriptionService.createPrescription({
            "examination": this.state.examination,
            "prescriptionId": 9999,
            "examinationId": this.state.examination.examinationId,
            "disease": this.state.disease,
            "description": this.state.description,
            "medicines": this.state.selectedMedicines
        });
    }

    onSelect(event) {
        this.setState({
            "selectedMedicines": event
        });
        console.log(event);
        console.log(this.state.selectedMedicines);
    }

    onRemove(event) {
        this.setState({
            "selectedMedicines": event
        });
        console.log(event);
        console.log(this.state.selectedMedicines);
    }

    render() {
        return (
            <>
                {console.log(this.state.medicine)}
                <Form onSubmit={this.handleSubmit}>
                    <h5>Disease</h5>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Disease *"
                            name="disease"
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>

                    <h5>Description</h5>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            placeholder="Description *"
                            name="description"
                            rows={5}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>


                    <Form.Group>
                        <h5>Medicines</h5>
                        <MultiSelect
                            options={this.state.medicine}
                            displayValue="name"
                            onSelect={this.onSelect}
                            onRemove={this.onRemove}

                        />
                    </Form.Group>





                    <Button variant="success" type="submit" block='true'>
                        Add Presciption
                    </Button>
                </Form>

            </>
        )
    }
}

export default AddPrescription;