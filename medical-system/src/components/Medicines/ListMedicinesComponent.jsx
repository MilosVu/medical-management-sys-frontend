import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MedicineService from '../../services/MedicineService';

class ListMedicinesComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
                medicines: []
        }
<<<<<<< HEAD
        this.addMedicine = this.addMedicine.bind(this)
=======
        
>>>>>>> 5e2deaa6aa2fbdfa85cdcdf4e2e360dcbbb8d3a4
    }

    componentDidMount(){
        MedicineService.getMedicines().then((res) => {
            this.setState({medicines: res.data});
        });
    }

<<<<<<< HEAD
    addMedicine(){
        this.props.history.push('/add-medicine');
    }
=======
    
>>>>>>> 5e2deaa6aa2fbdfa85cdcdf4e2e360dcbbb8d3a4

    render() {
        return (
            <div>
            <h2 className='test-center'>Medicine list</h2>
            <div className='row'>
                <Link to="/add-medicine">
                <button className='btn btn-primary'>Add medicine</button>

                </Link>
            </div>
            <div className="row">
                <button className='btn btn-primary' onClick={this.addMedicine}></button>
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
                        {
                            this.state.medicines.map(
                                medicine =>
                                <tr key = {medicine.medicineid}>
                                    <td> {medicine.name} </td>
                                    <td> {medicine.pharmaceuticalCompany.name} </td>
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

export default ListMedicinesComponent;