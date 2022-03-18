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

class ReceptionistLogin extends Component {

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
            <div class="tab-pane fade show active" id="admin" role="tabpanel" aria-labelledby="profile-tab">
                <h3 class="register-heading">Login as Admin</h3>
                <form method="post" action="func3.php">
                    <div class="row register-form">

                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="User Name *" name="username1" onkeydown="return alphaOnly(event);" required="" />
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password *" name="password2" required="" />
                            </div>
                            <input type="submit" class="btnRegister" name="adsub" value="Login" />
                        </div>
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default ReceptionistLogin;