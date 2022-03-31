import React, { Component } from 'react';
import SpecializationService from '../../services/SpecializationService';
import { Modal, Button } from 'react-bootstrap';
import AddSpecialization from './AddSpecialization';
import EditSpecializations from './EditSpecializations';

class ListSpecializationsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            specializations: [],
            show: false,
            showEdit: false,
            showDelete: false,
            specialization: null
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

    handleShowEdit = (id) => {
        this.setState({
            showEdit: true,
            specialization: id
        });
    }
    handleCloseEdit = (id) => {
        this.setState({
            showEdit: false,
            specialization: id
        });
    }
    handleShowDelete(id) {
        this.setState({
            showDelete: true,
            specialization: id
        });
        console.log(id);
    }

    handleCloseDelete = () => {
        this.setState({
            showDelete: false
        });
    }

    componentDidMount() {
        SpecializationService.getSpecializations().then((res) => {
            this.setState({ specializations: res.data });
        });

    }
    deleteSpecialization(id) {
        console.log(id);
        SpecializationService.deleteSpecialization(id);

        // window.location.reload();
    }


    render() {
        return (
            <div>

                <div className="row">
                    <table className='table table-light table-striped table-bordered'>

                        <thead>
                            <tr>

                                <th>Specialization name</th>
                                <th>Edit</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.specializations.map(
                                specialization =>
                                    <tr key={specialization.specializationId}>
                                        <td> {specialization.name} </td>
                                        <td><Button onClick={() => this.handleShowEdit(specialization)} className='btn btn-success' data-toggle="modal">Edit</Button></td>


                                    </tr>
                            )
                            }
                        </tbody>

                    </table>
                </div>

                <button variant="success" type="submit" block='true' className='btn btn-primary' onClick={this.handleShow} data-toggle="modal">
                    Add Specialization
                </button>

                <Modal show={this.state.show} onHide={() => { this.handleClose() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add Specialization
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddSpecialization />
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
                            Edit Specialization
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditSpecializations specialization={this.state.specialization} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.handleCloseEdit() }}>
                            Close Button
                        </Button>
                    </Modal.Footer>
                </Modal>


            </div>
        );
    }
}


export default ListSpecializationsComponent;