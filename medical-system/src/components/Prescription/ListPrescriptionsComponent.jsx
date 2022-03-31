import React, { Component } from 'react';
import PrescriptionService from '../../services/PrescriptionService';

class ListPrescriptionsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prescriptions: []
        }
    }

    componentDidMount() {
        PrescriptionService.getPrescriptions().then( (res) => {
            console.log(res);
            this.setState({ prescriptions: res.data });
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    {/* <table className='table table-light table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Password</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.firstName} </td>
                                            <td> {user.lastName} </td>
                                            <td> {user.username} </td>
                                            <td> {user.password} </td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table> */}
                </div>

            </div>
        );
    }
}

export default ListPrescriptionsComponent;