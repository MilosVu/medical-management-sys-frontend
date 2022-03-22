import React, { Component } from 'react'
import SpecializationService from '../../services/SpecializationService';

function registerDoctor(doctor) {
    return fetch('http://localhost:8080/api/v1/patients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(doctor)
    }).then(data => data.json())
}

class EditDoctorComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userRole: "Doctor",
            specializations: []

        }
        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        SpecializationService.getSpecializations().then((res) => {
            this.setState({ specializations: res.data });
        });
    }


    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async handleSubmit(e) {

        e.preventDefault();
        console.log('doctor => ' + JSON.stringify(this.state));

        const response = await registerDoctor(this.state);

        // step 5


    }
    /*  if(this.state.id === '_add'){
          EmployeeService.createEmployee(medicine).then(res =>{
              this.props.history.push('/employees');
          });
      }else{
          EmployeeService.updateEmployee(medicine, this.state.id).then( res => {
              this.props.history.push('/employees');
          });
      }
  }*/

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">

                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>

                                    <div className="form-group">
                                        <label> First name:</label>
                                        <input placeholder="First name" name="firstName" className="form-control"
                                            onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last name:</label>
                                        <input placeholder="Last name" name="lastName" className="form-control"
                                            onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email:</label>
                                        <input placeholder="Email" name="email" className="form-control"
                                            onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Fees:</label>
                                        <input placeholder="Fees" name="fees" className="form-control"
                                            onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Specialization:</label>
                                        <select placeholder="Specialization" name="specialization" className="form-control"
                                            value={this.state.SpecializationId} onChange={this.handleChange} >

                                            {
                                                this.state.specializations.map(
                                                    specialization =>
                                                        <option name={specialization.name} id={specialization.specializationId}>{specialization.name}</option>

                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label> Username:</label>
                                        <input placeholder="Username" name="userName" className="form-control"
                                            onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Password:</label>
                                        <input placeholder="Password" name="password" className="form-control"
                                            onChange={this.handleChange} />
                                    </div>





                                    <input type="submit" className='btnRegister' name='patsub1' value='Register' />


                                    <button className="btn btn-danger" >Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default EditDoctorComponent
