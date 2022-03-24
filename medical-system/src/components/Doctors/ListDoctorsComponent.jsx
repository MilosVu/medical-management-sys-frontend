import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DoctorService from '../../services/DoctorService';
import SpecializationService from '../../services/SpecializationService';
import AddDoctorComponent from '../Doctors/AddDoctorComponent';

class ListDoctorsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            doctors: [],
            specializations: [],
            show: false
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

    componentDidMount() {
        DoctorService.getDoctors().then((res) => {
            console.log("stiglo");
            console.log(res.data);
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

    render() {
        return (

            <div>
                <h2 className='test-center'>Doctors list</h2>



                <div className='row'>
                    <Button onClick={this.handleShow} className='btn btn-success' data-toggle="modal">Add doctor</Button>

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
                                LoadDoctors(this.state)
                            }
                        </tbody>

                    </table>


                </div>
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
            </div>




        )
    }

}
function LoadDoctors(state) {
    //console.log(state);
    if (state.user == 0) {
        return <h2>Loading doctors...</h2>;
    }
    return (

        state.doctors.map(
            doctor =>
                <tr key={doctor.userid}>
                    <td> {doctor.firstName} </td>
                    <td> {doctor.lastName} </td>
                    <td> {doctor.username} </td>
                    <td> {doctor.email} </td>
                    <td> {doctor.fees} </td>
                    <td> Spec </td>
                    <td> EDIT </td>
                    <td>Delete </td>
                </tr>
        )

    );
}


export default ListDoctorsComponent;