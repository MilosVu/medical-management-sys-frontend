import React, { Component } from 'react';
import UserService from '../services/UserService';

class ListUsers extends Component {

    constructor(props){
        super(props)

        this.state = {
                users: []
        }
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({users: res.data});
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
                                    <tr key = {user.id}>
                                        <td> {user.firstName} </td>
                                        <td> {user.lastName} </td>
                                        <td> {user.username} </td>
                                        <td> {user.password} </td>
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

export default ListUsers;