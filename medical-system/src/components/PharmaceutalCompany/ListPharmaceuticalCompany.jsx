import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PharmaceuticalCompanyService from '../../services/PharmaceuticalCompanyService';

class ListPharmaceuticalCompany extends Component {

    constructor(props){
        super(props)

        this.state = {
                companies: []
        }
        
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
            <Link to="/add-pharmaceutical-company">
                <button className='btn btn-primary'>Add company</button>

                </Link>
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
                        {
                            this.state.companies.map(
                                company =>
                                <tr key = {company.companyId}>
                                    <td> {company.name} </td>
                                    
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

export default ListPharmaceuticalCompany;