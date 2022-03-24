import React, { Component } from 'react'
import MedicineService from '../../services/MedicineService';
import PharmaceuticalCompanyService from '../../services/PharmaceuticalCompanyService';

 class CreateMedicineComponent extends Component {

    

    
    constructor(props){
        super(props)
        this.state={
            
            name: '',
            pharmaceuticalCompany: '',
            companies: []
            
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCompanyHandler = this.changeCompanyHandler.bind(this);
        this.saveOrUpdateMedicine = this.saveOrUpdateMedicine.bind(this);
    }

    componentDidMount(){
        PharmaceuticalCompanyService.getCompanies().then((res) => {
            this.setState({companies: res.data});
        });
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
        MedicineService.createMedicine(medicine);
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
                                    <select placeholder="Pharmaceutical company" name="pharmaceuticalCompany" className="form-control"
                                        value={this.state.pharmaceuticalCompany} onChange={this.changeCompanyHandler} >
                                     
                                         {
                            this.state.companies.map(
                                company =>
                                    <option name={company.name} id={company.id}>{company.name}</option>
                               
                            )
                        }
                                     </select>
                                </div>
                                

                                <button className="btn btn-success" onClick={this.saveOrUpdateMedicine}>Save</button>
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
