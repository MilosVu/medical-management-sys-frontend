import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DoctorService from '../../services/DoctorService';

class ListDoctorsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            doctors: []
        }

    }

    componentDidMount() {
        DoctorService.getDoctors().then((res) => {
            this.setState({ doctors: res.data });
        });
    }

    deleteDoctor = (e, id) => {
        e.preventDefault();
        let doctor = { id: id };
        console.log('doctor => ' + JSON.stringify(doctor));

        // step 5
        DoctorService.deleteDoctor(id);
    }

    render() {
        return (
            <div>
                <h2 className='test-center'>Doctors list</h2>
                <Link to="/add-doctor">
                    <button className='btn btn-primary'>Add doctor</button>

                </Link>
                <div className='row'>

                </div>
                <div className="row">
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>

                                <th>First name</th>
                                <th>Last name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Fees</th>
                                <th>Specialization</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.doctors.map(
                                    doctor =>
                                        <tr key={doctor.userid}>
                                            <td> {doctor.firstName} </td>
                                            <td> {doctor.lastName} </td>
                                            <td> {doctor.username} </td>
                                            <td> {doctor.email} </td>
                                            <td> {doctor.fees} </td>
                                            <td> Ne radi</td>

                                            <td> <button className="btn btn-success">Edit</button></td>

                                            <td> <button className="btn btn-danger" onClick={(e) => { this.deleteDoctor(e, doctor.userid); }}>Delete</button></td>
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

export default ListDoctorsComponent;