import React, { Component } from 'react';
import MedicineService from '../../services/MedicineService';
import { Modal, Button } from 'react-bootstrap';
import AddMedicineComponent from './AddMedicineComponent';
import PharmaceuticalCompanyService from '../../services/PharmaceuticalCompanyService';



class ListMedicinesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            medicines: [],
            companies: [],
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

    render() {

        return (
            <div>
                <h2 className='test-center'>Medicine list</h2>
                <div className='row'>

                    <Button onClick={this.handleShow} className='btn btn-success' data-toggle="modal">Add medicine</Button>


                </div>

                <div className="row">
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Pharmaceutical company</th>
                            </tr>
                        </thead>

                        <tbody>
                            {LoadMedicines(this.state)}
                        </tbody>

                    </table>
                </div>
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
