import React, { Component } from 'react';
import DoctorService from '../../services/DoctorService';
import SpecializationService from '../../services/SpecializationService';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import ExaminationService from '../../services/ExaminationService';
import { Button } from 'react-bootstrap';

class CreateExaminationComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            specializations: [],
            doctors: [],
            excludedDates: [],
            excludedTimes: [],
            selectedDate: setHours(setMinutes(new Date(), 0), 9),
            selectedSpecializationId: 0,
            selectedDoctorId: 0,
            displayTime: false,
            patientId: props.patientId
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        SpecializationService.getSpecializations().then((resSpec) => {

            this.setState({
                specializations: resSpec.data,
                selectedSpecializationId: resSpec.data[0].specializationId
            });

        });

        DoctorService.getDoctors().then((resDoctor) => {

            this.setState({
                doctors: resDoctor.data
            });

        })
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if(name == "selectedSpecializationId"){
            this.setState({
                [name]: value,
                "selectedDoctorId": (this.state.doctors.find( d => d.specialization.specializationId == value)).userId
            });
        }else{
            this.setState({
                [name]: value
            });
        }

    }

    setSelectedDoctor = (id) => {
        this.setState({
            selectedDoctorId: id
        });
    }

    handleSelectedDate = (date) => {
        this.setState({
            selectedDate: date
        });

        let excludedTimesArr = [];

        this.state.excludedDates.forEach(element => {

            if( element.toDateString() == date.toDateString() ){
                excludedTimesArr.push(element);
            }

        });

        this.setState({
            excludedTimes: excludedTimesArr
        });

    };

    handleSelectedTime = (date) => {
        this.setState({
            selectedDate: date
        });
    };
    
    getTimeSlots = () => {
        
        ExaminationService.getExcludedDates(this.state.selectedDoctorId).then((res) => {

            this.setState({
                displayTime: true,
                excludedDates: res
            });

        });

    }

    handleSubmit(e) {

        e.preventDefault();
        console.log('form => ');
        console.log(this.state);

        alert("klik");


        ExaminationService.createExamination({
            "examinationId":80,
            "doctor": {
                "userId": this.state.selectedDoctorId
            },
            "patient": {
                "userId": this.state.patientId
            },
            "status": false,
            "userCanceled": false,
            "doctorCanceled": false,
            "dateOfExamination": this.state.selectedDate
        }).then( (res) => {
            window.location.reload();
        });

    }


    render() {
        const { selectedDate, excludedTimes } = this.state;

        return (
            <div className="container">

                {
                    this.state.selectedSpecializationId === 0 || this.state.doctors.length == 0
                        ? <h2>Loading data</h2>
                        : <form>

                            <div className="row">

                                <div className="col-md-6">
                                    <label> Specialization:</label>
                                    <select placeholder="Specialization" name="selectedSpecializationId" className="form-control" onChange={this.handleChange} disabled={this.state.displayTime}>
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
                                    <select placeholder="Doctor" name="selectedDoctorId" className="form-control" onChange={this.handleChange} disabled={this.state.displayTime}>
                                        {
                                            this.state.doctors.map(
                                                doctor => {
                                                    console.log(doctor);
                                                    if (this.state.selectedDoctorId == 0) {
                                                        this.setSelectedDoctor(doctor.userId);
                                                    }
                                                    if (this.state.selectedSpecializationId == doctor.specialization.specializationId) {
                                                        return <option name={doctor.username} value={doctor.userId} id={doctor.userId} key={doctor.userId}>{doctor.firstName} {doctor.lastName}, fee {doctor.fees}$</option>
                                                    }
                                                }
                                            )
                                        }
                                    </select>
                                </div>

                            </div>

                            {
                                !this.state.displayTime
                                    ? <div><Button className="btnLogin btn btn-light" value="create" onClick={this.getTimeSlots}>Confirm doctor</Button></div>
                                    : <div className="row">

                                        <div className="col-md-6">
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={this.handleSelectedDate}
                                                /* onSelect={this.getExcludedTimes} */
                                                dateFormat="dd/MM/yyy"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <DatePicker
                                                selected={selectedDate}
                                                excludeTimes={this.state.excludedTimes}
                                                onChange={this.handleSelectedTime}
                                                /* onSelect={this.getExcludedTimes} */
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={30}
                                                timeFormat="HH:mm"
                                                dateFormat="HH:mm"
                                                minDate={new Date()}
                                                minTime={setHours(setMinutes(new Date(), 0), 9)}
                                                maxTime={setHours(setMinutes(new Date(), 0), 17)}
                                            />
                                        </div>

                                        <div>
                                            <button className="btnLogin btn btn-light" value="create" onClick={this.handleSubmit}>
                                                Create appointment
                                            </button>
                                        </div>

                                    </div>
                            }

                        </form>

                }

            </div>
        );
    }
}

export default CreateExaminationComponent;