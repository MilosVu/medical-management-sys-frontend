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

class Register extends Component {

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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" onChange={this.handleChange} />
                </label>
                <label>
                    First Name:
                    <input type="text" name="firstName" onChange={this.handleChange} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" onChange={this.handleChange} />
                </label>
                <label>
                    Contact:
                    <input type="text" name="contact" onChange={this.handleChange} />
                </label>
                <label>
                    Allergies:
                    <input type="text" name="allergies" onChange={this.handleChange} />
                </label>
                <label>
                    <select value={this.state.value} name="gender" onChange={this.handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


export default Register;
