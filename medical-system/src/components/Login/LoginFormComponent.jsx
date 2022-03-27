import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/api/v1/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}


class LoginFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {userRole : this.props.userRole};

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

        const response = await loginUser(
            this.state
        );

        if(response.length !== 0){
            // setToken(response);
            alert("Loged in");
            localStorage.setItem(this.state.userRole + "-token", JSON.stringify({
                "userId" : response[0]["userId"],
                "username" : response[0]["username"]
            }));

            window.location.reload();

        }else{
            alert("Wrong username or password");
        }
        
    }

    render() {
        return (
            <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h3 className="register-heading">Login as {this.props.userRole}</h3>
                <form onSubmit={this.handleSubmit}>

                    <div className="row register-form">

                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="User Name *" name="username"  required="" onChange={this.handleChange}/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password *" name="password" required="" onChange={this.handleChange}/>
                            </div>
                            <input type="submit" className="btnLogin btn btn-light" name="docsub1" value="Login" />
                        </div>

                    </div>

                </form>
            </div>
        );
    }
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }

export default LoginFormComponent;