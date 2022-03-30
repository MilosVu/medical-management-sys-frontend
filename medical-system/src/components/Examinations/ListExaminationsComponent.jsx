import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ExaminationService from '../../services/ExaminationService';
import AddPrescribe from '../Prescribes/AddPrescribe';
import CreateExaminationComponent from './CreateExaminationComponent';
import MedicineService from '../../services/MedicineService';

function formatDate(res) {

    res.data.forEach(element => {

        let date = new Date(Date.parse(element.dateOfExamination));
        element.dateOfExamination = date.toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        });

    });

    return res;

}

class ListExaminationsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            examinations: [], medicines: [],
            doctorId: props.doctorId,
            patientId: props.patientId,
            showCreate: false,
            showCancel: false,
            showPrescribe: false,
            examination: null

        }
    }

    componentDidMount() {

        if (this.state.doctorId != undefined) {

            ExaminationService.getExaminationsForDoctor(this.state.doctorId).then((res) => {
                res = formatDate(res);
                this.setState({ examinations: res.data });
            });

        } else if (this.state.patientId != undefined) {

            ExaminationService.getExaminationsForPatient(this.state.patientId).then((res) => {
                res = formatDate(res);
                this.setState({ examinations: res.data });
            });

        } else {

            ExaminationService.getExaminations().then((res) => {
                res = formatDate(res);
                this.setState({ examinations: res.data });
            });


        }


        MedicineService.getMedicines().then((res) => {
            console.log("stiglo");
            console.log(res.data);
            this.setState({
                medicines: res.data
            });
        });

    }

    handleShowCreate = () => {
        this.setState({
            showCreate: true
        });
    }

    handleCloseCreate = () => {
        this.setState({
            showCreate: false
        });
    }
    handleShowCancel = (id) => {
        this.setState({
            showCancel: true,
            examination: id
        });
    }

    handleCloseCancel = () => {
        this.setState({
            showCancel: false
        });
    }
    handleShowPrescribe = (id) => {
        this.setState({
            showPrescribe: true,
            examination: id
        });
    }

    handleClosePrescribe = () => {
        this.setState({
            showPrescribe: false
        });
    }

    createExamination = () => {

    }

    cancelExamination(id) {
        console.log(id);
        ExaminationService.deleteExamination(id);
        window.location.reload();
    }

    render() {
        return (
            <div>

                {
                    this.state.examinations.length === 0
                        ? <h2>There are no appointments available</h2>
                        : <div className="row">
                            <table className='table table-light table-striped table-bordered'>

                                <thead>
                                    <tr>
                                        <th>Doctor</th>
                                        <th>Patient</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Prescribe</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        this.state.examinations.map(
                                            examination =>
                                                <tr key={examination.examinationId}>
                                                    <td> {examination.doctor.firstName} {examination.doctor.lastName}</td>
                                                    <td> {examination.patient.firstName} {examination.patient.lastName}</td>

                                                    <td> {examination.dateOfExamination} </td>

                                                    {
                                                        examination.status
                                                            ? <td>Cancelled</td>
                                                            : <td>Regular</td>
                                                    }

                                                    <td><Button onClick={() => this.handleShowPrescribe(examination)} className='btn btn-success' data-toggle="modal">Prescribe</Button></td>

                                                    <td><Button onClick={() => this.handleShowCancel(examination)} className='btn btn-danger' data-toggle="modal">Cancel</Button> </td>

                                                </tr>
                                        )
                                    }
                                </tbody>

                            </table>
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

                <Modal show={this.state.showCreate} onHide={this.handleCloseCreate}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Schedule an appointment
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreateExaminationComponent patientId={this.state.patientId}/>
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.showPrescribe} onHide={() => { this.handleClosePrescribe() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Prescribe
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddPrescribe examination={this.state.examination} medicines={this.state.medicines} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.handleClosePrescribe() }}>
                            Close Button
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showCancel} onHide={() => { this.handleCloseCancel() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Cancel
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Do you want to cancel this examination?</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => this.cancelExamination(this.state.examination)}>
                            Cancel
                        </Button>
                        <Button variant="secondary" onClick={() => { this.handleCloseCancel() }}>
                            Close Button
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}

export default ListExaminationsComponent;