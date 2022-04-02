import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PrescriptionService from '../../services/PrescriptionService';
import DetailsPrescription from '../Prescription/DetailsPrescription';

function formatDate(date) {

    return (new Date(Date.parse(date))).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });

}

class ListPrescriptionsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            prescriptions: [],
            showDetails: false,
            prescriptionDetails: [],
            patientId: props.patientId,
        }
    }

    componentDidMount() {
        PrescriptionService.getPrescriptionsByPatient(this.state.patientId).then( (res) => {
            console.log("vratio prescriptions");

            console.log(res);
            this.setState({ prescriptions: res.data });
        });
    }

    handleShowDetails = (prescription) => {
        this.setState({
            showDetails: true,
            prescriptionDetails: prescription
        });
    }

    handleCloseDetails = () => {
        this.setState({
            showDetails: false,
            prescriptionDetails: []
        });
    }

    render() {
        return (
            <div>

                {
                    this.state.prescriptions.length === 0
                        ? <h2>There are no prescriptions</h2>
                        : <div>
                            <div className="row">

                                <table className='table table-light table-striped table-bordered'>

                                    <thead>
                                        <tr>
                                            <th>Doctor</th>
                                            <th>Patient</th>
                                            <th>Date</th>
                                            <th>Details</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.prescriptions.map(
                                                prescription => {
                                                    return <>
                                                        <tr key={prescription.examination.examinationId}>
                                                            <td> {prescription.examination.doctor.firstName} {prescription.examination.doctor.lastName}</td>
                                                            <td> {prescription.examination.patient.firstName} {prescription.examination.patient.lastName}</td>
                                                            <td> {formatDate(prescription.examination.dateOfExamination)} </td>

                                                            <td><Button onClick={() => this.handleShowDetails(prescription)} className='btn btn-info' data-toggle="modal">Details</Button> </td>
                                                            <td><Button onClick={() => this.handleShowDetails(prescription)} className='btn btn-danger' data-toggle="modal">Delete</Button> </td>
                                                        </tr>
                                                    </>
                                                }
                                            )
                                        }
                                    </tbody>

                                </table>

                            </div>
                        </div>
                }

                {
                    this.state.patientId != undefined
                        ? <div className='add-examination'>
                            <button variant="success" type="submit" block='true' className='btn btn-primary' onClick={this.handleShowCreate}>
                                Appoint
                            </button>
                        </div>
                        : <></>
                }

                <Modal show={this.state.showDetails} onHide={this.handleCloseDetails}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Prescription details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DetailsPrescription prescription={this.state.prescriptionDetails} />
                    </Modal.Body>
                </Modal>

            </div>
        );
    }
}

export default ListPrescriptionsComponent;