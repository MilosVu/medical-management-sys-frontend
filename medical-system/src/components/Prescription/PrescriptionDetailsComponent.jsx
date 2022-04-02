import React, { Component } from 'react';

class PrescriptionDetailsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            examinations: [],
            showDetails: false
        }
    }

    componentDidMount() {
        PrescriptionService.getCompletedPrescriptions().then( (res) => {
            console.log("vratio prescriptions");

            console.log(res);
            this.setState({ examinations: res.data });
        });
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default PrescriptionDetailsComponent;