import React, { Component } from 'react';
import withAuth from '../../withAuth';
import ListExaminationsComponent from '../Examinations/ListExaminationsComponent';
import DoctorTabsComponent from './DoctorTabsComponent';

class DoctorDashboard extends Component {

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

    toExaminations = () => {
        const { view } = this.state;
        this.setState(prevState => ({ view: "examinations" }));
    }

    render() {
        return (
            <div>
                <h3> Welcome dr Petar Petrovic</h3>
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
                            ? <DoctorTabsComponent />
                            : <ListExaminationsComponent userid = {"4"}/>
                        }
                    </div>

                </div>

            </div>
        );
    }
}

export default withAuth(DoctorDashboard);