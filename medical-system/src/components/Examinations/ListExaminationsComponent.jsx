import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExaminationService from '../../services/ExaminationService';

class ListExaminationsComponent extends Component {

    constructor(props) {
        super(props)
        console.log(props.userid);
        this.state = {
            examinations: [],
            doctorid: 4
        }
    }

    componentDidMount() {
        console.log(this.props.userid);

        if(this.state.doctorid != undefined){

            ExaminationService.getExaminationsForDoctor(this.state.doctorid).then((res) => {
                this.setState({ examinations: res.data });
            });

        }else{

            ExaminationService.getExaminations().then((res) => {
                this.setState({ examinations: res.data });
            });

        }
    }

    render() {
        return (
            <div>
                <h2 className='test-center'>Examinations list</h2>
                <Link to="/add-pharmaceutical-company">
                    <button className='btn btn-primary'>Add examination</button>

                </Link>
                <div className='row'>

                </div>
                <div className="row">
                    <table className='table table-striped table-bordered'>

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

            </div>
        );
    }
}

export default ListExaminationsComponent;