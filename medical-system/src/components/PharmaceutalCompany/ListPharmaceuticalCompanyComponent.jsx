import React, { Component } from 'react';
import PharmaceuticalCompanyService from '../../services/PharmaceuticalCompanyService';
import AddCompany from '../PharmaceutalCompany/AddCompany';
import { Modal, Button } from 'react-bootstrap';

class ListPharmaceuticalCompanyComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            companies: [],
            show: false
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

    componentDidMount(){
        PharmaceuticalCompanyService.getCompanies().then((res) => {
            this.setState({companies: res.data});
        });
    }

    

    render() {
        return (
            <div>
                <h2 className='test-center'>Pharmaceutical companies list</h2>


                <Button onClick={this.handleShow} className='btn btn-success' data-toggle="modal">Add Company</Button>

            <div className='row'>
                
            </div>
            <div className="row">
                <table className='table table-striped table-bordered'>

                    <thead>
                        <tr>
                            
                            <th>Pharmaceutical company</th>
                        </tr>
                    </thead>

                    <tbody>
                            {LoadCompanies(this.state)}
                        </tbody>

                    </table>
                </div>
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