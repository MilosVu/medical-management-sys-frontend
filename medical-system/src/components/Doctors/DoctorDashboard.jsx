import React, { Component } from 'react';

class DoctorDashboard extends Component {
    render() {
        return (
            <div>
                <h3> Welcome user</h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" href="#list-dash" role="tab" aria-controls="home" data-toggle="list" aria-expanded="true">Dashboard</a>
                            <a className="list-group-item list-group-item-action" href="#list-app" id="list-app-list" role="tab" data-toggle="list" aria-controls="home" aria-expanded="false">Appointments</a>
                            <a className="list-group-item list-group-item-action" href="#list-pres" id="list-pres-list" role="tab" data-toggle="list" aria-controls="home" aria-expanded="false"> Prescription List</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content">
                            <div className="container-fluid container-fullw bg-white">
                                <div className="row">

                                    <div className="col-sm-4">
                                        <div className="panel panel-white no-radius text-center">
                                            <div className="panel-body">
                                                <span className="fa-stack fa-2x"> <i className="fa fa-square fa-stack-2x text-primary"></i> <i className="fa fa-list fa-stack-1x fa-inverse"></i> </span>
                                                <h4 className="StepTitle"> View Appointments</h4>
                                                <p className="links cl-effect-1">
                                                    <a href="#list-app">
                                                        Appointment List
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="panel panel-white no-radius text-center">
                                            <div className="panel-body">
                                                <span className="fa-stack fa-2x"> <i className="fa fa-square fa-stack-2x text-primary"></i> <i className="fa fa-list-ul fa-stack-1x fa-inverse"></i> </span>
                                                <h4 className="StepTitle"> Prescriptions</h4>
                                                <p className="links cl-effect-1">
                                                    <a href="#list-pres">
                                                        Prescription List
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
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

export default DoctorDashboard;