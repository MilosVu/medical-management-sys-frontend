import React, { Component } from 'react';
import PharmaceuticalCompanyService from '../../services/PharmaceuticalCompanyService';
import AddCompany from '../PharmaceutalCompany/AddCompany';
import { Modal, Button } from 'react-bootstrap';
import EditCompany from './EditCompany';

class ListPharmaceuticalCompanyComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            companies: [],
            show: false,
            showEdit: false,
            showDelete: false,
            company: null,
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
            company: id
        });
    }
    handleCloseEdit = (id) => {
        this.setState({
            showEdit: false,
            company: id
        });
    }
    handleShowDelete(id) {
        this.setState({
            showDelete: true,
            company: id
        });
        console.log(id);
    }

    handleCloseDelete = () => {
        this.setState({
            showDelete: false
        });
    }

    componentDidMount() {
        PharmaceuticalCompanyService.getCompanies().then((res) => {
            this.setState({ companies: res.data });
        });
    }
    deleteCompany(id) {
        console.log(id);
        PharmaceuticalCompanyService.deleteCompany(id);

        window.location.reload();
    }


    render() {
        return (
            <div>

                <div className="row">
                    <table className='table table-light table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Pharmaceutical company</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.companies.map(
                                company =>
                                    <tr key={company.companyId}>
                                        <td> {company.name} </td>
                                        <td><Button onClick={() => this.handleShowEdit(company)} className='btn btn-success' data-toggle="modal">Edit</Button></td>

                                        <td><Button onClick={() => this.handleShowDelete(company)} className='btn btn-danger' data-toggle="modal">Delete</Button> </td>

                                    </tr>


                            )
                            }
                        </tbody>

                    </table>
                </div>

                <button variant="success" type="submit" block='true' className='btn btn-primary' onClick={this.handleShow} data-toggle="modal">
                    Add Company
                </button>

                <Modal show={this.state.show} onHide={() => { this.handleClose() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add Company
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddCompany />
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
                            Edit Company
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditCompany company={this.state.company} />
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
                            Delete Company
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Do you want to delete this pharmaceutical company?</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => this.deleteCompany(this.state.company)}>
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

function LoadCompanies(state) {
    console.log(state);
    if (state.user == 0) {
        return <h2>Loading companies...</h2>;
    }
    return (

        state.companies.map(
            company =>
                <tr key={company.companyId}>
                    <td> {company.name} </td>

                </tr>


        )

    );
}

export default ListPharmaceuticalCompanyComponent;