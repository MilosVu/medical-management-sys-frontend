import React, { Component } from 'react';
import EditReceptionist from './EditReceptionist';
import { Modal, Button } from 'react-bootstrap';
import ChangeReceptionistPassword from './ChangeReceptionistPassword';

class ReceptionistTabsComponent extends Component {

    constructor(props) {
        super(props)

        console.log(props);
        this.state = {
            user: props.user,
            show: false,
            showPassword: false
        }
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
                                        <h6 className="mb-0">Username:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {this.state.user.username}
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
                                    <div className="col-sm-12">
                                        <Button onClick={this.handleShow} className='btn btn-success' data-toggle="modal">Edit</Button>

                                        <Button onClick={this.handleShowPassword} className='btn btn-success' data-toggle="modal">Change Password</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Modal show={this.state.show} onHide={() => { this.handleClose() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Edit
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditReceptionist user={this.state.user} />
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
                            Edit
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ChangeReceptionistPassword user={this.state.user} />
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

export default ReceptionistTabsComponent;