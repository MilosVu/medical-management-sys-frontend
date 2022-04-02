import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ExaminationService from '../../services/ExaminationService';
import AddPrescription from '../Prescription/AddPrescription';
import CreateExaminationComponent from './CreateExaminationComponent';
import MedicineService from '../../services/MedicineService';
import DatePicker from "react-datepicker";
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

class ListExaminationsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            examinations: [],
            medicines: [],
            doctorId: props.doctorId,
            patientId: props.patientId,
            showCreate: false,
            showCancel: false,
            showPrescribe: false,
            showPrescriptionDetails: false,
            examination: null,
            selectedDate: new Date(),
            prescription: null,
            showAllExaminations: false
        }
    }

    componentDidMount() {

        if (this.state.doctorId != undefined) {

            ExaminationService.getExaminationsForDoctor(this.state.doctorId).then((res) => {
                this.setState({ examinations: res.data });
            });

        } else if (this.state.patientId != undefined) {

            ExaminationService.getExaminationsForPatient(this.state.patientId).then((res) => {
                this.setState({ examinations: res.data });
            });

        } else {

            ExaminationService.getExaminations().then((res) => {
                this.setState({ examinations: res.data });
            });

        }


        MedicineService.getMedicines().then((res) => {
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

    async handleShowPrescriptionDetails(id) {
        let p = await PrescriptionService.getPrescriptionById(id);
        this.setState({
            showPrescriptionDetails: true,
            prescription: p.data
        });
    }

    handleClosePrescriptionDetails = () => {
        this.setState({
            showPrescriptionDetails: false
        });
    }

    handleSelectedDate = (date) => {
        this.setState({
            selectedDate: date
        });
    };

    cancelExamination(id) {
        console.log(id);
        ExaminationService.deleteExamination(id);
        // window.location.reload();
    }

    render() {
        return (
            <div>
                {
                    this.state.examinations.length === 0
                        ? <h2>There are no appointments available</h2>
                        : <div>
                            <div className="row examination-select-date">
                                <div className="col-md-6">
                                    <label className='show-all-examinations-checkbox'>
                                        <input
                                            type="checkbox"
                                            checked={this.state.showAllExaminations}
                                            onChange={() => {
                                                this.setState({
                                                    "showAllExaminations": !this.state.showAllExaminations
                                                });
                                            }
                                            }
                                        />
                                        Show all examination
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <DatePicker
                                        selected={this.state.selectedDate}
                                        onChange={this.handleSelectedDate}
                                        dateFormat="dd/MM/yyy"
                                        disabled={this.state.showAllExaminations}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <table className='table table-light table-striped table-bordered'>

                                    <thead>
                                        <tr>
                                            <th>Doctor</th>
                                            <th>Patient</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            {
                                                this.state.doctorId != undefined ?
                                                    <th>Prescribe</th> : <></>
                                            }
                                            <th>Cancel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.examinations.map(
                                                examination => {
                                                    if (this.state.showAllExaminations == true || this.state.selectedDate.toDateString() == (new Date(examination.dateOfExamination).toDateString())) {
                                                        if (this.state.patientId != undefined && examination.statusCompleted === true) {
                                                            return <></>;
                                                        }
                                                        else {
                                                            return <>
                                                                <tr key={examination.examinationId}>
                                                                    <td> {examination.doctor.firstName} {examination.doctor.lastName}</td>
                                                                    <td> {examination.patient.firstName} {examination.patient.lastName}</td>

                                                                    <td> {formatDate(examination.dateOfExamination)} </td>

                                                                    {
                                                                        examination.statusCompleted
                                                                            ? <>
                                                                                <td>Completed</td>
                                                                                <td><Button onClick={() => this.handleShowPrescriptionDetails(examination)} className='btn btn-success' data-toggle="modal">Details</Button></td>
                                                                            </>
                                                                            : <>
                                                                                {this.state.doctorId != undefined ?
                                                                                    <>
                                                                                        <td>Regular</td>
                                                                                        <td><Button onClick={() => this.handleShowPrescribe(examination)} className='btn btn-success' data-toggle="modal">Prescribe</Button></td>
                                                                                    </>
                                                                                    :
                                                                                    <td>Regular</td>
                                                                                }


                                                                            </>
                                                                    }

                                                                    <td><Button onClick={() => this.handleShowCancel(examination)} className='btn btn-danger' data-toggle="modal">Cancel</Button> </td>
                                                                </tr>
                                                            </>;
                                                        }
                                                    }
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

                <Modal show={this.state.showCreate} onHide={this.handleCloseCreate}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Schedule an appointment
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreateExaminationComponent patientId={this.state.patientId} />
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.showPrescribe} onHide={() => { this.handleClosePrescribe() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Prescribe
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddPrescription examination={this.state.examination} medicines={this.state.medicines} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.handleClosePrescribe() }}>
                            Close Button
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showPrescriptionDetails} onHide={() => { this.handleClosePrescriptionDetails() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Prescription Details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DetailsPrescription prescription={this.state.prescription} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.handleClosePrescriptionDetails() }}>
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