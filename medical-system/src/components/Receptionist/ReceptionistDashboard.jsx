import React, { Component } from 'react';
import withAuth from '../../withAuth';
import ListDoctorsComponent from '../Doctors/ListDoctorsComponent';
import ListExaminationsComponent from '../Examinations/ListExaminationsComponent';
import ListPatientsComponent from '../Patient/ListPatientsComponent';



class ReceptionistDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "dashboard"
        };
    }
    toDashboard = () => {
        const { view } = this.state;
        this.setState(prevState => ({ view: "dashboard" }));
    }

    toDoctorList = () => {
        const { view } = this.state;
        this.setState(prevState => ({ view: "doctors" }));
    }
    toPatientList = () => {
        const { view } = this.state;
        this.setState(prevState => ({ view: "patients" }));
    }

    toExaminationList = () => {
        const { view } = this.state;
        this.setState(prevState => ({ view: "examinations" }));
    }

    toPrescriptionList = () => {
        const { view } = this.state;
        this.setState(prevState => ({ view: "prescriptions" }));
    }
    render() {
        return (
            <div>
                <h3> Welcome dr Svabo</h3>
                <div className="row">

                    <div className="col-md-3">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a href="#" role="tab" onClick={this.toDashboard}
                                className={`list-group-item list-group-item-action ${this.state.view == "dashboard" ? "active" : ""}`}>
                                Dashboard
                            </a>
                            <a href="#" role="tab" onClick={this.toDoctorList}
                                className={`list-group-item list-group-item-action ${this.state.view == "doctors" ? "active" : ""}`}>
                                Doctors
                            </a>
                            <a href="#" role="tab" onClick={this.toPatientList}
                                className={`list-group-item list-group-item-action ${this.state.view == "patients" ? "active" : ""}`}>
                                Patients
                            </a>
                            <a href="#" role="tab" onClick={this.toExaminationList}
                                className={`list-group-item list-group-item-action ${this.state.view == "examinations" ? "active" : ""}`}>
                                Examinations
                            </a>
                            <a href="#" role="tab" onClick={this.toPrescriptionList}
                                className={`list-group-item list-group-item-action ${this.state.view == "prescriptions" ? "active" : ""}`}>
                                Prescriptions
                            </a>

                        </div>
                    </div>

                    <div className="col-md-9">

                        {(() => {
                            switch (this.state.view) {
                                case 'dashboard':
                                    return <>abvg</>;
                                case 'doctors':
                                    return <ListDoctorsComponent />;
                                case 'patients':
                                    return <ListPatientsComponent />
                                case 'examinations':
                                    return <ListExaminationsComponent />;
                                case 'prescriptions':
                                    return <>Ledu</>;
                                default:
                                    return null;
                            }
                        })()}


                    </div>

                </div>

            </div>
        );
    }
}

export default withAuth(ReceptionistDashboard);