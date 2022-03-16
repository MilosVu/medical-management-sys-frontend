import React, { Component } from 'react'
import MedicineService from '../../services/MedicineService';

 class CreateMedicineComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            
            name: '',
            pharmaceuticalCompany: ''
            
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCompanyHandler = this.changeCompanyHandler.bind(this);
        this.saveOrUpdateMedicine = this.saveOrUpdateMedicine.bind(this);
    }
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeCompanyHandler= (event) => {
        this.setState({pharmaceuticalCompany: event.target.value});
    }

    saveOrUpdateMedicine = (e) => {
        e.preventDefault();
        let medicine = {name: this.state.name, pharmaceuticalCompany: this.state.pharmaceuticalCompany};
        console.log('medicine => ' + JSON.stringify(medicine));

        // step 5
        MedicineService.createMedicine(medicine).then(res =>{
            this.props.history.push('/medicines');
        });
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
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Name: </label>
                                    <input placeholder="Name" name="name" className="form-control" 
                                       value={this.state.name} onChange={this.changeNameHandler} />
                                </div>
                                <div className = "form-group">
                                    <label> Pharmaceutical company:</label>
                                    <input placeholder="Pharmaceutical company" name="pharmaceuticalCompany" className="form-control" 
                                     value={this.state.pharmaceuticalCompany} onChange={this.changeCompanyHandler}   />
                                </div>
                                

                                <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
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

export default CreateMedicineComponent