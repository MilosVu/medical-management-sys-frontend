import React, { Component } from 'react';
import MedicineService from '../../services/MedicineService';
import { Modal, Button } from 'react-bootstrap';
import AddMedicineComponent from './AddMedicineComponent';
import PharmaceuticalCompanyService from '../../services/PharmaceuticalCompanyService';
import EditMedicines from './EditMedicines';



class ListMedicinesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            medicines: [],
            companies: [],
            show: false,
            showDelete: false,
            showEdit: false,
            medicine: null,
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
            medicine: id
        });
    }
    handleCloseEdit = (id) => {
        this.setState({
            showEdit: false,
            medicine: id
        });
    }
    handleShowDelete(id) {
        this.setState({
            showDelete: true,
            medicine: id
        });
        console.log(id);
    }

    handleCloseDelete = () => {
        this.setState({
            showDelete: false
        });
    }

    componentDidMount() {



        MedicineService.getMedicines().then((res) => {
            console.log("stiglo");
            console.log(res.data);
            this.setState({
                medicines: res.data
            });
        });

        PharmaceuticalCompanyService.getCompanies().then((res) => {

            this.setState({
                companies: res.data
            });
        });
    }

    deleteMedicine(id) {
        console.log(id);
        MedicineService.deleteMedicine(id);

        window.location.reload();
    }

    render() {

        return (
            <div>

                <div className="row">
                    <table className='table table-light table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Pharmaceutical company</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.medicines.map(
                                medicine =>
                                    <tr key={medicine.medicineid}>
                                        <td> {medicine.name} </td>
                                        <td> {medicine.pharmaceuticalCompany.name} </td>
                                        <td><Button onClick={() => this.handleShowEdit(medicine)} className='btn btn-success' data-toggle="modal">Edit</Button></td>
                                        <td><Button onClick={() => this.handleShowDelete(medicine)} className='btn btn-danger' data-toggle="modal">Delete</Button> </td>

                                    </tr>
                            )
                            }
                        </tbody>

                    </table>
                </div>


                <button variant="success" type="submit" block='true' className='btn btn-primary' onClick={this.handleShow}  data-toggle="modal">
                    Add medicine
                </button>


                <Modal show={this.state.show} onHide={() => { this.handleClose() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add Medicine
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddMedicineComponent companies={this.state.companies} />
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
                            Edit Medicine
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditMedicines medicine={this.state.medicine} />
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
                            Delete Medicine
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Do you want to delete this medicine?</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => this.deleteMedicine(this.state.medicine)}>
                            Delete
                        </Button>
                        <Button variant="secondary" onClick={() => { this.handleCloseDelete() }}>
                            Close Button
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );

    }
}

function LoadMedicines(state) {
    console.log(state);
    if (state.user == 0) {
        return <h2>Loading medicines...</h2>;
    }
    return (

        state.medicines.map(
            medicine =>
                <tr key={medicine.medicineid}>
                    <td> {medicine.name} </td>
                    <td> {medicine.pharmaceuticalCompany.name} </td>
                </tr>
        )

    );
}

export default ListMedicinesComponent;
