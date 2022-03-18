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

class DoctorLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {};

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
            <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h3 className="register-heading">Login as Doctor</h3>
                <form method="post" action="func1.php">
                    <div className="row register-form">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="User Name *" name="username3"  required="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password *" name="password3" required="" />
                            </div>

                            <input type="submit" className="btnRegister" name="docsub1" value="Login" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default DoctorLogin;