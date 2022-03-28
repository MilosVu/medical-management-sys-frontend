
import { Form, Button } from "react-bootstrap"

import { Component, useState } from 'react';

import DoctorService from "../../services/DoctorService";
import SpecializationService from "../../services/SpecializationService";



class AddPrescribe extends Component {


    constructor(props) {
        super(props);
        this.state = { medicine: 1 };

        this.handleChange = this.handleChange.bind(this);
        this.changeMedicines = this.changeMedicines.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeMedicines(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(value);
        this.setState({
            medicine: value
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
    } changeSpecialization


    async handleSubmit(event) {
        event.preventDefault();



        console.log('prescribe => ' + JSON.stringify(this.state));







        // console.log(token);
        // if (token.length !== 0) {
        //     setToken(token);
        // } else {
        //     alert("Wrong username or password")
        // }

    }



    render() {
        return (
            <>

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
                        <textarea
                            type="textarea"
                            placeholder="Description *"
                            name="description"
                            rows="5"
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>


                    <Form.Group>
                        <h5>Medicines</h5>
                        <Form.Select
                            name="medicines"
                            onChange={this.changeMedicines}


                        >
                            {
                                this.props.medicines.map(medicine =>
                                    <option key={medicine.medicineId} value={medicine.medicineId} name={medicine.name} >{medicine.name}</option>
                                )

                            }
                        </Form.Select>
                    </Form.Group>





                    <Button variant="success" type="submit" block='true'>
                        Add Presciption
                    </Button>
                </Form>

            </>
        )
    }
}

export default AddPrescribe;