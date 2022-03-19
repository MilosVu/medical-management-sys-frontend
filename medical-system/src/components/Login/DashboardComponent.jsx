import React, { Component } from 'react';
import DoctorLogin from './DoctorLogin';
import PatientLogin from './PatientLogin';
import PatientRegister from './PatientRegister';
import ReceptionistLogin from './ReceptionistLogin';
// import "./Dashboard.scss";

class DashboardComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogginActive: true,
            userType: "patient"
        };
    }

    toPatient = () => {
        const { isLogginActive, userType } = this.state;
        this.setState(prevState => ({ userType: "patient" }));
    }

    toDoctor = () => {
        const { isLogginActive, userType } = this.state;
        this.setState(prevState => ({ userType: "doctor" }));
    }

    toReceptionist = () => {
        const { isLogginActive, userType } = this.state;
        this.setState(prevState => ({ userType: "receptionist" }));
    }

    changeState = () => {
        this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    }

    // componentDidMount() {
    //     this.rightSide.classList.add("right");
    // }

    // changeState() {
    //     const { isLogginActive, userType } = this.state;
    //     console.log(this.state);

    //     if (isLogginActive) {
    //         this.rightSide.classList.remove("right");
    //         this.rightSide.classList.add("left");
    //     } else {
    //         this.rightSide.classList.remove("left");
    //         this.rightSide.classList.add("right");
    //     }
    //     this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    // }

    render() {

        const { isLogginActive, userType } = this.state;
        const current = isLogginActive ? "Register" : "Login";
        const currentActive = isLogginActive ? "login" : "register";

        return (
            <div className="row">

                <div className="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome</h3>
                </div>

                <div className="col-md-9 register-right" >

                    {this.state.isLogginActive
                        ?<div>
                            <UserMenu
                                current={current}
                                currentActive={currentActive}
                                containerRef={ref => (this.rightSide = ref)}
                                obj={this}
                            //onClick={this.changeState.bind(this)}
                            />

                            <div className="tab-content" id="myTabContent">

                                <div className="tab-content-container" ref={ref => (this.container = ref)}>
                                    {userType == "doctor" && (
                                        <DoctorLogin containerRef={ref => (this.current = ref)} />
                                    )}
                                    {userType == "patient" && (
                                        <PatientLogin containerRef={ref => (this.current = ref)} />
                                    )}
                                    {userType == "receptionist" && (
                                        <ReceptionistLogin containerRef={ref => (this.current = ref)} />
                                    )}
                                </div>

                                <a href="#" onClick={this.changeState}>Already have an account?</a>

                            </div>
                        </div>

                        : <div>
                            <PatientRegister />
                            <a href="#" onClick={this.changeState}>Go to login</a>
                        </div>
                    }

                </div>

            </div>

        );
    }
}

const UserMenu = props => {
    console.log(props.obj.state.userType);
    return (
        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li className="nav-item">
                <a ref={props.containerRef} onClick={props.obj.toPatient}
                    className={`nav-link ${props.obj.state.userType == "patient" ? "active" : ""}`}
                    id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Patient</a>
            </li>
            <li className="nav-item">
                <a ref={props.containerRef} onClick={props.obj.toDoctor}
                    className={`nav-link ${props.obj.state.userType == "doctor" ? "active" : ""}`}
                    id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">Doctor</a>
            </li>
            <li className="nav-item">
                <a ref={props.containerRef} onClick={props.obj.toReceptionist}
                    className={`nav-link ${props.obj.state.userType == "receptionist" ? "active" : ""}`}
                    id="profile-tab" data-toggle="tab" role="tab" aria-controls="admin" aria-selected="false">Receptionist</a>
            </li>
        </ul>
    );
};

export default DashboardComponent;