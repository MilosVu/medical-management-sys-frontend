import React, { Component } from 'react';
import UserService from '../../services/UserService';
import withAuth from '../../withAuth';
import ListExaminationsComponent from '../Examinations/ListExaminationsComponent';
import NavbarComponent from '../NavbarComponent';
import DoctorTabsComponent from './DoctorTabsComponent';


class DoctorDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: "dashboard",
            user: []
        };
    }

    componentWillMount() {

        const user = JSON.parse(localStorage.getItem("doctor-token"));
        console.log(user.userId);

        UserService.getUser(user.userId).then((res) => {
            console.log("stiglo");
            console.log(res.data);
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

    render() {
        return (
            <div className='dashboard-container'>
                <NavbarComponent />
                <h3> Welcome {this.state.user.username}</h3>
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
                        </div>
                    </div>

                    <div className="col-md-9">
                        {this.state.view === "dashboard"
                            ? LoadDoctorTabComponent(this.state)
                            : <ListExaminationsComponent userid={this.state.user.userid} />
                        }
                    </div>

                </div>

            </div>
        );
    }
}

function LoadDoctorTabComponent(state) {
    console.log(state);
    if (state.user == 0) {
        return <h2>Loading doctor...</h2>;
    }
    return (
        <DoctorTabsComponent user={state.user} />
    );
}

export default withAuth(DoctorDashboard);