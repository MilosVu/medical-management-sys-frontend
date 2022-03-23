import React, { Component } from 'react';

class PatientTabsComponent extends Component {

    constructor(props){
        super(props)

        console.log(props);
        this.state = {
            user : props.user
        }
    }

    render() {
        return (
            <div className="tab-content">
                <div className="row gutters-sm">

                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {this.state.user.firstName} {this.state.user.lastName}
                                    </div> 
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email:</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {this.state.user.email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <a className="btn btn-info" href="#">Edit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default PatientTabsComponent;