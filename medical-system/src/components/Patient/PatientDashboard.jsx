import React, { Component } from 'react';
import UserService from '../../services/UserService';
import withAuth from '../../withAuth';
import ListExaminationsComponent from '../Examinations/ListExaminationsComponent';
import NavbarComponent from '../NavbarComponent';
import ListPrescriptionsComponent from '../Prescription/ListPrescriptionsComponent';
import PatientTabsComponent from './PatientTabsComponent';

class PatientDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: "dashboard",
            user: []
        };
    }

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem("patient-token"));

        UserService.getUser(user.userId).then((res) => {
            this.setState({
                user: res.data,
            });
        });
    }

    toDashboard = () => {
        const { view } = this.state;
        this.setState(prevState => ({ view: "dashboard" }));
    }

    toExaminations = () => {
        const { view } = this.state;
        this.setState(prevState => ({ view: "examinations" }));
    }

    toPrescriptions = () => {
        const { view } = this.state;
        this.setState(prevState => ({ view: "prescriptions" }));
    }

    render() {
        return (
            <div className='dashboard-container'>
                <NavbarComponent />
                <h3 className='welcome-heading'> Welcome {this.state.user.username}</h3>
                <div className="row">

                    <div className="col-md-3">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a href="#" role="tab" onClick={this.toDashboard}
                                className={`list-group-item list-group-item-action ${this.state.view == "dashboard" ? "active" : ""}`}>
                                Dashboard
                            </a>
                            <a href="#" role="tab" onClick={this.toExaminations}
                                className={`list-group-item list-group-item-action ${this.state.view == "examinations" ? "active" : ""}`}>
                                Appointments
                            </a>
                            <a href="#" role="tab" onClick={this.toPrescriptions}
                                className={`list-group-item list-group-item-action ${this.state.view == "prescriptions" ? "active" : ""}`}>
                                Prescriptions
                            </a>
                        </div>
                    </div>

                    <div className="col-md-9">
                        {console.log(this.state)}
                        {(() => {
                            switch (this.state.view) {
                                case 'dashboard':
                                    return LoadPatientTabComponent(this.state)
                                case 'examinations':
                                    return <ListExaminationsComponent patientId={this.state.user.userId} />
                                case 'prescriptions':
                                    return <ListPrescriptionsComponent patientId={this.state.user.userId}/>
                            }
                        })()}

                    </div>

                </div>

            </div>
        );
    }
}

function LoadPatientTabComponent(state) {
    console.log(state);
    if (state.user == 0) {
        return <h2>Loading patient...</h2>;
    }
    return (
        <PatientTabsComponent user={state.user} />
    );
}

export default withAuth(PatientDashboard);