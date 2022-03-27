import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExaminationService from '../../services/ExaminationService';

class ListExaminationsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            examinations: [],
            doctorId: props.doctorId,
            patientid: props.patientid
        }
    }

    componentDidMount() {

        if (this.state.doctorId != undefined) {

            ExaminationService.getExaminationsForDoctor(this.state.doctorId).then((res) => {
                this.setState({ examinations: res.data });
            });

        } else {

            ExaminationService.getExaminations().then((res) => {
                this.setState({ examinations: res.data });
            });

        }
    }

    render() {
        return (
            <div>

                <div className="row">
                    <table className='table table-light table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Doctor</th>
                                <th>Patient</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.examinations.map(
                                    examination =>
                                        <tr>
                                            <td> {examination.doctor.firstName} {examination.doctor.lastName}</td>
                                            <td> {examination.patient.firstName} {examination.patient.lastName}</td>
                                            <td> {examination.dateOfExamination} </td>

                                            {examination.status ?
                                                <td>Regular</td> :
                                                <td>Cancelled</td>}
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>

                <div className='add-examination'>
                    <button variant="success" type="submit" block='true' className='btn btn-primary'>
                        Add New Medicine
                    </button>
                    {/* <Link to="/add-pharmaceutical-company">
                        <button className='btn btn-primary'>Add examination</button>
                    </Link> */}
                </div>
            </div>
        );
    }
}

export default ListExaminationsComponent;