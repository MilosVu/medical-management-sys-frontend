import React, { Component } from 'react';

class DoctorTabsComponent extends Component {
    render() {
        return (
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
        );
    }
}

export default DoctorTabsComponent;