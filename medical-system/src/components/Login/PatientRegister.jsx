import React, { Component } from 'react';

async function registerPatient(patient) {
    return fetch('http://localhost:8080/api/v1/patients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
        .then(data => data.json())
}

class PatientRegister extends Component {

    constructor(props) {
        super(props);
        this.state = { userRole: "Patient" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();

        console.log(JSON.stringify(this.state));

        const response = await registerPatient(
            this.state
        );

        console.log(response);

        // console.log(token);
        // if (token.length !== 0) {
        //     setToken(token);
        // } else {
        //     alert("Wrong username or password")
        // }

    }

    render() {
        return (
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="register-heading">Register as Patient</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="row register-form">

                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="First Name *" name="firstName" required="" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username *" name="username" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password *" name="password" required="" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" minLength="10" maxLength="10" name="allergies" className="form-control" placeholder="Allergies *" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <div className="maxl">
                                    <label className="radio inline">
                                        <input type="radio" name="gender" value="Male" onChange={this.handleChange} />
                                        <span> Male </span>
                                    </label>
                                    <label className="radio inline">
                                        <input type="radio" name="gender" value="Female" onChange={this.handleChange} />
                                        <span>Female </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Last Name *" name="lastName" required="" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email *" name="email" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Confirm Password *" name="cpassword" required="" /* onChange={this.handleChange} */ /><span id="message"></span>
                            </div>
                            <div className="form-group">
                                <input type="tel" minLength="10" maxLength="10" name="contact" className="form-control" placeholder="Your Phone *" onChange={this.handleChange} />
                            </div>
                            <input type="submit" className="btnRegister" name="patsub1" value="Register" />
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default PatientRegister;