import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PrescriptionService from '../../services/PrescriptionService';

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
            examinations: [],
            showDetails: false
        }
    }

    componentDidMount() {
        PrescriptionService.getCompletedPrescriptions().then( (res) => {
            console.log("vratio prescriptions");

            console.log(res);
            this.setState({ examinations: res.data });
        });
    }

    handleShowDetails = () => {
        this.setState({
            showDetails: true
        });
    }

    handleCloseDetails = () => {
        this.setState({
            showDetails: false
        });
    }

    render() {
        return (
            <div>

                {
                    this.state.examinations.length === 0
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
                                            this.state.examinations.map(
                                                examination => {
                                                    return <>
                                                        <tr key={examination.examinationId}>
                                                            <td> {examination.doctor.firstName} {examination.doctor.lastName}</td>
                                                            <td> {examination.patient.firstName} {examination.patient.lastName}</td>
                                                            <td> {formatDate(examination.dateOfExamination)} </td>

                                                            <td><Button onClick={() => this.handleShowDetails(examination)} className='btn btn-info' data-toggle="modal">Details</Button> </td>
                                                            <td><Button onClick={() => this.handleShowDetails(examination)} className='btn btn-danger' data-toggle="modal">Delete</Button> </td>
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
                        <h1>USAO</h1>
                        {/* <CreateExaminationComponent patientId={this.state.patientId} /> */}
                    </Modal.Body>
                </Modal>

            </div>
        );
    }
}

export default ListPrescriptionsComponent;