import React, { Component } from 'react';
import DoctorService from '../../services/DoctorService';
import SpecializationService from '../../services/SpecializationService';
import moment from "moment";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import ExaminationService from '../../services/ExaminationService';

const arrDates = [
    new Date(2021, 4, 20, 8, 15), //Thu May 20 2021 08:15:00
    new Date(2021, 4, 20, 8, 45), //Fri May 20 2021 08:45:00
    new Date(2021, 4, 21, 8, 30), //Sat May 21 2021 08:30:00
    new Date(2021, 4, 21, 9, 0) //Sat May 21 2021 09:00:00
];

class CreateExaminationComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            specializations: [],
            doctors: [],
            excludedTimes: [new Date(2022, 3, 27, 16, 0)],
            selectedDate: setHours(setMinutes(new Date(), 0), 9),
            selectedSpecializationId: 0,
            selectedDoctorId: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        SpecializationService.getSpecializations().then((resSpec) => {

            let spec = resSpec.data[0];

            this.setState({
                specializations: resSpec.data,
                selectedSpecializationId: resSpec.data[0].specializationId
            });

            console.log(spec);

        });

        DoctorService.getDoctors().then((resDoctor) => {

            // resDoctor.data.array.forEach(element => {

            //     if(element.specialization.specializationId === spec.specializationId){
            //         doc = element;
            //     }

            // });

            this.setState({
                doctors: resDoctor.data
            });

        })
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log(event);
        console.log("this.state");
        console.log(this.state);
        console.log("podaci");
        console.log(name);
        console.log(value);
    }

    handleSubmit(e) {

        e.preventDefault();
        console.log('form => ');
        console.log(this.state);

        alert("klik");

    }

    handleSelectedDate = (date) => {
        this.setState({
            selectedDate: date
        });
    };

    getExcludedTimes = (date) => {

        // let arrSpecificDates = [];

        // for (let i = 0; i < arrDates.length; i++) {
        //     if (
        //         moment(date, moment.ISO_8601).format("YYYY/MM/DD") ===
        //         moment(arrDates[i], moment.ISO_8601).format("YYYY/MM/DD")
        //     ) {
        //         arrSpecificDates.push(moment(arrDates[i], moment.ISO_8601).toObject());
        //     }
        // }

        // let arrExcludedTimes = [];
        // for (let i = 0; i < arrSpecificDates.length; i++) {
        //     arrExcludedTimes.push(setHours(setMinutes(new Date(arrSpecificDates[i].minutes), arrSpecificDates[i].hours)));
        //     this.setState({
        //         excludedTimes: arrExcludedTimes
        //     });
        // }

        let arrExcludedTimes = ExaminationService.getExcludedTimes(date);

        this.setState({
            excludedTimes: arrExcludedTimes
        });

    };

    render() {
        const { selectedDate, excludedTimes } = this.state;
        return (
            <div className="container">

                {/* <form onSubmit={this.handleSubmit}>

                    <div className="row">

                        <div className="col-md-6">
                            <label> Specialization:</label>
                            <select placeholder="Specialization" name="selectedSpecialization" className="form-control"
                                value={this.state.selectedSpecialization.specializationId} onChange={this.handleChange} >
                                {
                                    this.state.specializations.map(
                                        specialization =>
                                            <option name={specialization.name} id={specialization.specializationId} key={specialization.specializationId}>{specialization.name}</option>
                                    )
                                }
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label>Doctors:</label>
                            <select placeholder="Doctor" name="selectedDoctor" className="form-control"
                                value={this.state.SpecializationId} onChange={this.handleChange} >
                                {console.log("specialisation")}
                                {console.log(this.state.selectedSpecialization)}
                                {console.log("Doctor")}
                                {console.log(this.state.doctors)}
                                {
                                    this.state.doctors.map(
                                        doctor => {
                                            if (this.state.selectedSpecialization.specializationId == doctor.specializationId) {
                                                return <option name={doctor.username} id={doctor.userId} key={doctor.userId}>{doctor.firstName} {doctor.lastName} sme</option>
                                            } else {
                                                return <option name={doctor.username} id={doctor.userId} key={doctor.userId}>{doctor.firstName} {doctor.lastName} NE SME</option>
                                            }
                                        }
                                    )
                                }
                            </select>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <DatePicker
                                selected={selectedDate}
                                onChange={this.handleSelectedDate}
                                onSelect={this.getExcludedTimes}
                                dateFormat="dd/MM/yyy"
                            />
                        </div>

                        <div className="col-md-6">
                            <DatePicker
                                selected={selectedDate}
                                excludeTimes={excludedTimes}
                                onChange={this.handleSelectedDate}
                                onSelect={this.getExcludedTimes}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={30}
                                timeFormat="HH:mm"
                                dateFormat="hh:mm aa"
                                minDate={new Date()}
                                minTime={setHours(setMinutes(new Date(), 0), 9)}
                                maxTime={setHours(setMinutes(new Date(), 0), 17)}
                            />
                        </div>

                    </div>

                    <input type="submit" className="btnLogin btn btn-light" name="docsub1" value="Login" />

                </form> */}
                {console.log("NAJBITNIJE")}
                {console.log(this.state.doctors.length == 0)}
                {console.log(this.state.selectedSpecializationId === 0)}
                {
                    this.state.selectedSpecializationId === 0 || this.state.doctors.length == 0
                        ? <h2>Loading data</h2>
                        : <form onSubmit={this.handleSubmit}>

                            <div className="row">

                                <div className="col-md-6">
                                    <label> Specialization:</label>
                                    <select placeholder="Specialization" name="selectedSpecializationId" className="form-control" onChange={this.handleChange} >
                                        {
                                            this.state.specializations.map(
                                                specialization =>
                                                    <option name={specialization.name} value={specialization.specializationId} key={specialization.specializationId}>{specialization.name}</option>
                                            )
                                        }
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label>Doctors:</label>
                                    <select placeholder="Doctor" name="selectedDoctorId" className="form-control" onChange={this.handleChange} >
                                        {console.log("=================== poziv =====================")}
                                        {console.log(this.state.selectedSpecializationId)}
                                        {console.log(this.state.doctors)}
                                        {
                                            this.state.doctors.map(
                                                doctor => {
                                                    console.log(doctor.specialization.specializationId);
                                                    if (this.state.selectedSpecializationId == doctor.specialization.specializationId) {
                                                        return <option name={doctor.username} value={doctor.userId} id={doctor.userId} key={doctor.userId}>{doctor.firstName} {doctor.lastName}</option>
                                                    }
                                                }
                                            )
                                        }
                                    </select>
                                </div>

                            </div>

                            <div><button className="btnLogin btn btn-light" value="create" onClick={this.handleSubmit} /></div>


                        </form>

                }

            </div>
        );
    }
}

export default CreateExaminationComponent;