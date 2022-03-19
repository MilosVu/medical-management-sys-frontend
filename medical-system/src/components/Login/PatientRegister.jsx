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
            <h1>REGISTER</h1>
        );
    }
}

export default PatientRegister;