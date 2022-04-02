
import { Form, Button } from "react-bootstrap"

import { Component, useState } from 'react';


import PrescriptionService from "../../services/PrescriptionService";
import PrescriptionMedicineService from "../../services/PrescriptionMedicineService";






class DetailsPrescription extends Component {


    constructor(props) {
        super(props);
        this.state = {
            prescription: this.props.prescription,
            medicines: []
        };


    }

    componentDidMount() {

        PrescriptionMedicineService.getMedicinesByPrescriptionId(this.props.prescription.prescriptionId).then((res) => {
            console.log("stiglo");
            console.log(res.data);
            this.setState({
                medicines: res.data
            });
        });

    }


    render() {
        return (
            <>
                {console.log(this.state.medicines)}
                {console.log(this.props)}
                <h4>Disease</h4>
                <h6>{this.props.prescription.disease}</h6>


                <h4>Description</h4>
                <h6>{this.props.prescription.description}</h6>



                <h4>Medicines</h4>

                {

                    this.state.medicines.map((medicine) => {
                        return <h6> {medicine.name}</h6>
                        console.log("USAO U MAP");
                        console.log(medicine);
                    }


                    )}







            </>
        )
    }
}

export default DetailsPrescription;