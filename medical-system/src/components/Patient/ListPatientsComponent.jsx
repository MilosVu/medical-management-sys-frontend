import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DoctorService from '../../services/DoctorService';
import PatientService from '../../services/PatientService';

class ListPatientsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            patients: []
        }

    }

    componentDidMount() {
        PatientService.getPatients().then((res) => {
            this.setState({ patients: res.data });
        });
    }

    deletePatient = (e, id) => {
        e.preventDefault();
        let patient = { id: id };
        console.log('patient => ' + JSON.stringify(patient));

        // step 5
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
                                <th>Edit</th>
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


                                            <td> <button className="btn btn-success">Edit</button></td>

                                            <td> <button className="btn btn-danger" onClick={(e) => { this.deletePatient(e, patient.userid); }}>Delete</button></td>
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

export default ListPatientsComponent;