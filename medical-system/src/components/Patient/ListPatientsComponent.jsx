import React, { Component } from 'react';
import PatientService from '../../services/PatientService';
import { Modal, Button } from 'react-bootstrap';

class ListPatientsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            patients: [],
            showDelete: false,
            patientId: null
        }

    }

    componentDidMount() {
        PatientService.getPatients().then((res) => {
            this.setState({ patients: res.data });
        });
    }



    handleShowDelete(id) {
        this.setState({
            "showDelete": true,
            "patientId": id
        });
        console.log(id);
    }

    handleCloseDelete = () => {
        this.setState({
            showDelete: false
        });
    }

    deletePatient(id) {
        console.log(id);
        PatientService.deletePatient(id);
    }




    render() {
        return (
            <div>
                
                <div className="row">
                    <table className='table table-light table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Allergies</th>
                                <th>Gender</th>

                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.patients.map(
                                    patient =>
                                        <tr key={patient.userid}>
                                            <td> {patient.firstName} </td>
                                            <td> {patient.lastName} </td>
                                            <td> {patient.username} </td>
                                            <td> {patient.email} </td>
                                            <td> {patient.contact} </td>
                                            <td> {patient.allergies} </td>
                                            <td> {patient.gender} </td>



                                            <td><Button onClick={() => this.handleShowDelete(patient)} className='btn btn-danger' data-toggle="modal">Delete</Button> </td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>

                <Modal show={this.state.showDelete} onHide={() => { this.handleCloseDelete() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Delete Patient
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Do you want to delete this patient?</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => this.deletePatient(this.state.patientId)}>
                            Delete
                        </Button>
                        <Button variant="secondary" onClick={() => { this.handleCloseDelete() }}>
                            Close Button
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}

export default ListPatientsComponent;