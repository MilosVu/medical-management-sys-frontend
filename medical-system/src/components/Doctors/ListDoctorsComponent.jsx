import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DoctorService from '../../services/DoctorService';
import SpecializationService from '../../services/SpecializationService';
import AddDoctorComponent from '../Doctors/AddDoctorComponent';
import EditDoctor from '../Doctors/EditDoctor';

class ListDoctorsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            doctors: [],
            specializations: [],
            show: false,
            showEdit: false,
            showDelete: false,
            doctorId: 0
        };
    }

    handleShow = () => {
        this.setState({
            show: true
        });
    }

    handleClose = () => {
        this.setState({
            show: false
        });
    }

    handleShowEdit = (id) => {
        this.setState({
            showEdit: true,
            doctorId: id
        });
        console.log("POZIV F-JE");

    }
    
    handleCloseEdit = () => {
        this.setState({
            showEdit: false
        });
    }

    handleShowDelete(id) {
        this.setState({
            "showDelete": true,
            "doctorId": id
        });
        console.log(id);
    }

    handleCloseDelete = () => {
        this.setState({
            showDelete: false
        });
    }

    componentDidMount() {
        DoctorService.getDoctors().then((res) => {

            this.setState({
                doctors: res.data
            });
        });

        SpecializationService.getSpecializations().then((res) => {

            this.setState({
                specializations: res.data
            });
        });
    }

    deleteDoctor(id) {
        console.log(id);
        DoctorService.deleteDoctor(id);
        window.location.reload();
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
                                            {
                                                doctor.specialization === null
                                                    ? <td>No specialization</td>
                                                    :
                                                    <td> {doctor.specialization.name} </td>
                                            }

                                            <td><Button onClick={() => this.handleShowEdit(doctor)} className='btn btn-success' data-toggle="modal">Edit</Button></td>

                                            <td><Button onClick={() => this.handleShowDelete(doctor)} className='btn btn-danger' data-toggle="modal">Delete</Button> </td>
                                        </tr>

                                )
                            }
                        </tbody>

                    </table>
                </div>

                <button variant="success" type="submit" block='true' className='btn btn-primary' onClick={this.handleShow} data-toggle="modal">
                    Add Doctor
                </button>

                <Modal show={this.state.show} onHide={() => { this.handleClose() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add Doctor
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddDoctorComponent specializations={this.state.specializations} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.handleClose() }}>
                            Close Button
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showEdit} onHide={() => { this.handleCloseEdit() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Edit Doctor
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditDoctor doctor={this.state.doctorId} specializations={this.state.specializations} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.handleCloseEdit() }}>
                            Close Button
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showDelete} onHide={() => { this.handleCloseDelete() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Delete Doctor
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Do you want to delete this doctor?</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => this.deleteDoctor(this.state.doctorId)}>
                            Delete
                        </Button>
                        <Button variant="secondary" onClick={() => { this.handleCloseDelete() }}>
                            Close Button
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}

function LoadDoctors(state) {
    console.log(state);
    if (state.doctors == 0) {
        return <h2>Loading doctors...</h2>;
    } else {
        return (

            state.doctors.map(
                doctor =>

                    <tr key={doctor.userid}>
                        <td> {doctor.firstName} </td>
                        <td> {doctor.lastName} </td>
                        <td> {doctor.username} </td>
                        <td> {doctor.email} </td>
                        <td> {doctor.fees} </td>
                        {
                            doctor.specialization === null
                                ? <td>No specialization</td>
                                :
                                <td> {doctor.specialization.name} </td>
                        }

                        <td><Button onClick={state.handleShowEdit} className='btn btn-success' data-toggle="modal">Edit</Button></td>

                        <td><Button onClick={state.handleShowDelete} className='btn btn-success' data-toggle="modal">Delete</Button> </td>
                    </tr>

            )



        );
    }
}




export default ListDoctorsComponent;