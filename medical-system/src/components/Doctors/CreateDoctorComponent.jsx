import React, { Component } from 'react'





import DoctorService from '../../services/DoctorService';

class CreateDoctorComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

            FirstName: '',
            LastName: '',
            Username: '',
            Email: '',
            Password: '',
            Fees: '',
            SpecializationId: '',
            specializations: []

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);

        this.saveOrUpdateCompany = this.saveOrUpdateCompany.bind(this);
    }


    changeFirstNameHandler = (event) => {
        this.setState({ FirstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ LastName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ LastName: event.target.value });
    }

    saveOrUpdateCompany = (e) => {

        e.preventDefault();
        let company = { name: this.state.name };
        console.log('company => ' + JSON.stringify(company));

        // step 5
        PharmaceuticalCompanyService.createCompany(company);

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
                                <form>

                                    <div className="form-group">
                                        <label> Pharmaceutical company:</label>
                                        <input placeholder="Pharmaceutical company" name="pharmaceuticalCompany" className="form-control"
                                            onChange={this.changeNameHandler} />
                                    </div>



                                    <button className="btn btn-success" onClick={this.saveOrUpdateCompany}>Save</button>



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

export default CreateDoctorComponent
