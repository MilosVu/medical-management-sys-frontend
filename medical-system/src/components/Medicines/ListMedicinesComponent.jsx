import React, { Component } from 'react';
import MedicineService from '../../services/MedicineService';

class ListMedicinesComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
                medicines: []
        }
    }

    componentDidMount(){
        MedicineService.getMedicines().then((res) => {
            this.setState({medicines: res.data});
        });
    }

    render() {
        return (
            <div>
            <h2 className='test-center'>Users list</h2>
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