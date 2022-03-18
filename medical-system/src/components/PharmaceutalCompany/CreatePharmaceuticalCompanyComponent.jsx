import React, { Component } from 'react'



import PharmaceuticalCompanyService from '../../services/PharmaceuticalCompanyService';

 class CreateMedicineComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            
            name: '',
            
            
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.saveOrUpdateCompany = this.saveOrUpdateCompany.bind(this);
    }
    

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    saveOrUpdateCompany = (e) => {
        
        e.preventDefault();
        let company = {name: this.state.name};
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
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        
                        <div className = "card-body">
                            <form>
                                
                                <div className = "form-group">
                                    <label> Pharmaceutical company:</label>
                                    <input placeholder="Pharmaceutical company" name="pharmaceuticalCompany" className="form-control" 
                                      onChange={this.changeNameHandler}   />
                                </div>
                                <input type='text'></input>
                                
                                
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

export default CreateMedicineComponent