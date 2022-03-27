import React from "react";
import { Navigate } from "react-router-dom";


function hasToken(){

  if(!!localStorage.getItem("patient-token")){

    return "patient-dashboard";

  }else if(!!localStorage.getItem("doctor-token")){

    return "doctor-dashboard";

  }else if(!!localStorage.getItem("receptionist-token")){

    return "receptionist-dashboard";

  }
  return null;
}

const withAuth = (Component) => {
  const AuthRoute = () => {
    
    const isAuth = hasToken();

    switch (isAuth) {
      case 'patient-dashboard':
        return (Component.name == "PatientDashboard") ? <Component /> : <Navigate replace to={"/" + isAuth} />;
      case 'doctor-dashboard':
        return (Component.name == "DoctorDashboard") ? <Component /> : <Navigate replace to={"/" + isAuth} />;
      case 'receptionist-dashboard':
        return (Component.name == "ReceptionistDashboard") ? <Component /> : <Navigate replace to={"/" + isAuth} />;
      default:
        return (Component.name == "DashboardComponent") ? <Component /> : <Navigate replace to={"/"} />;
    }
    
  };

  return AuthRoute;
};

export default withAuth;