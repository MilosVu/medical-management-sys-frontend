import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ChangeDoctorPassword from './ChangeDoctorPassword';
import EditDoctor from './EditDoctor';
import SpecializationService from '../../services/SpecializationService';
import UserService from '../../services/UserService';


class DoctorTabsComponent extends Component {

    constructor(props){
        super(props)

        console.log(props);
        this.state = {
            specializations: [],
            user: props.user,
            showEdit: false,
            showPassword: false
        }
    }

    handleShow = () => {
        this.setState({
            showEdit: true
        });
    }
    handleClose = () => {
        this.setState({
            showEdit: false
        });
    }
    handleShowPassword = () => {
        this.setState({
            showPassword: true
        });
    }
    handleClosePassword = () => {
        this.setState({
            showPassword: false
        });
    }
    componentDidMount() {


        SpecializationService.getSpecializations().then((res) => {

            this.setState({
                specializations: res.data
            });


        });
        const user2 = JSON.parse(localStorage.getItem("doctor-token"));

        UserService.getUser(user2.userId).then((res) => {
            this.setState({
                user2: res.data,
            });
        });

    }

    render() {
        return (
            <div className="tab-content">
                <div className="row gutters-sm">

                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {this.state.user.firstName} {this.state.user.lastName}
                                    </div> 
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {this.state.user.email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Fee:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {this.state.user.fees}$
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Specialization:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {this.state.user.specialization.name}
                                    </div>
                                </div>

                                <hr />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <Button onClick={this.handleShow} className='btn btn-success' data-toggle="modal">Edit Data</Button>

                                        <Button onClick={this.handleShowPassword} className='btn btn-success' data-toggle="modal">Change Password</Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Modal show={this.state.showEdit} onHide={() => { this.handleClose() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Edit Data
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditDoctor doctor={this.state.user} specializations={this.state.specializations} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.handleClose() }}>
                            Close Button
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showPassword} onHide={() => { this.handleClosePassword() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Change Password
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ChangeDoctorPassword doctor={this.state.user} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.handleClosePassword() }}>
                            Close Button
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default DoctorTabsComponent;