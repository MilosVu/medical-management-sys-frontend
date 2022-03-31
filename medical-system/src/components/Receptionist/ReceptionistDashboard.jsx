import React, { Component } from 'react';
import withAuth from '../../withAuth';
import ListDoctorsComponent from '../Doctors/ListDoctorsComponent';
import ListExaminationsComponent from '../Examinations/ListExaminationsComponent';
import ListPatientsComponent from '../Patient/ListPatientsComponent';
import ListMedicinesComponent from '../Medicines/ListMedicinesComponent';
import ListPharmaceuticalCompanyComponent from '../PharmaceutalCompany/ListPharmaceuticalCompanyComponent';
import NavbarComponent from '../NavbarComponent';
import UserService from '../../services/UserService';
import ReceptionistTabsComponent from './ReceptionistTabsComponent';
import ListSpecializationsComponent from '../Specializations/ListSpecializationsComponent';
import ListPrescriptionsComponent from '../Prescription/ListPrescriptionsComponent';



class ReceptionistDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "dashboard",
            user: []
        };
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("receptionist-token"));

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


    toMedicinesList = () => {
        const { view } = this.state;
        this.setState(prevState => ({ view: "medicines" }));
    }

    toPharmaceuticalCompanies = () => {
        const { view } = this.state;
        this.setState(prevState => ({ view: "pharmaceuticalCompanies" }));
    }

    toSpecializations = () => {
        const { view } = this.state;
        this.setState(prevState => ({ view: "specializations" }));
    }


    render() {
        return (
            <div className='dashboard-container'>
                <NavbarComponent />
                <h3 className='welcome-heading'> Welcome {this.state.user.username} </h3>
                <div className="row">

                    <div className="col-md-3">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a href="#" role="tab" onClick={this.toDashboard}
                                className={`list-group-item list-group-item-action ${this.state.view == "dashboard" ? "active" : ""}`}>
                                Account data
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
                            <a href="#" role="tab" onClick={this.toMedicinesList}
                                className={`list-group-item list-group-item-action ${this.state.view == "medicines" ? "active" : ""}`}>
                                Medicines
                            </a>
                            <a href="#" role="tab" onClick={this.toPharmaceuticalCompanies}
                                className={`list-group-item list-group-item-action ${this.state.view == "pharmaceuticalCompanies" ? "active" : ""}`}>
                                Pharmaceutical companies
                            </a>
                            <a href="#" role="tab" onClick={this.toSpecializations}
                                className={`list-group-item list-group-item-action ${this.state.view == "specializations" ? "active" : ""}`}>
                                Specializations
                            </a>

                        </div>
                    </div>

                    <div className="col-md-9">

                        {(() => {
                            switch (this.state.view) {
                                case 'dashboard':
                                    return LoadPatientTabComponent(this.state);
                                case 'doctors':
                                    return <ListDoctorsComponent />;
                                case 'patients':
                                    return <ListPatientsComponent />
                                case 'examinations':
                                    return <ListExaminationsComponent />;
                                case 'prescriptions':
                                    return <ListPrescriptionsComponent />;
                                case 'medicines':
                                    return <ListMedicinesComponent />;
                                case 'pharmaceuticalCompanies':
                                    return <ListPharmaceuticalCompanyComponent />;
                                case 'specializations':
                                    return <ListSpecializationsComponent />;
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

function LoadPatientTabComponent(state) {
    if (state.user == 0) {
        return <h2>Loading receptionist...</h2>;
    }
    return (
        <ReceptionistTabsComponent user={state.user} />
    );
}

export default withAuth(ReceptionistDashboard);