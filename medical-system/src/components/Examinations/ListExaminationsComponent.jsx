import React, { Component } from 'react';
import { Modal, Button} from 'react-bootstrap';
import ExaminationService from '../../services/ExaminationService';
import CreateExaminationComponent from './CreateExaminationComponent';

function formatDate(res){

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
            examinations: [],
            doctorId: props.doctorId,
            patientId: props.patientId,
            showCreate: false
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

    }

    cancelExamination = () => {
        alert("Canceled")
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

    createExamination = () => {

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

                                                    <td><button onClick={() => this.cancelExamination()} className='btn btn-success' data-toggle="modal">Prescribe</button></td>
                                                    <td><button onClick={() => this.cancelExamination()} className='btn btn-danger' data-toggle="modal">Cancel</button> </td>

                                                </tr>
                                        )
                                    }
                                </tbody>

                            </table>
                        </div>
                }

                <div className='add-examination'>
                    <button variant="success" type="submit" block='true' className='btn btn-primary' onClick={this.handleShowCreate}>
                        Appoint
                    </button>
                    {/* <Link to="/add-pharmaceutical-company">
                        <button className='btn btn-primary'>Add examination</button>
                    </Link> */}
                </div>

                <Modal show={this.state.showCreate} onHide={this.handleCloseCreate}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Schedule an appointment
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreateExaminationComponent />
                    </Modal.Body>
                </Modal>

            </div>
        );
    }
}

export default ListExaminationsComponent;