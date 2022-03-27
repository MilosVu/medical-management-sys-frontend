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

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {

        e.preventDefault();
        console.log('form => ');
        console.log(this.state);

        alert("klik");


        // ExaminationService.createExamination({
        //     "examinationId":80,
        //     "doctor": {
        //         "userId": this.state.selectedDoctorId
        //     },
        //     "patient": {
        //         "userId": this.state.patientId
        //     },
        //     "status": false,
        //     "userCanceled": false,
        //     "doctorCanceled": false,
        //     "dateOfExamination": this.state.selectedDate
        // });

    }

    handleSelectedDate = (date) => {
        this.setState({
            selectedDate: date
        });
    };

    setSelectedDoctor = (id) => {
        this.setState({
            selectedDoctorId: id
        });
    }

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

        //let arrExcludedTimes = ExaminationService.getExcludedTimes(date);

        this.setState({
            excludedTimes: new Date()
        });

    };

    getTimeSlots = () => {
        this.setState({
            displayTime: true
        });
    }

    render() {
        const { selectedDate, excludedTimes } = this.state;

        return (
            <div className="container">

                {
                    this.state.selectedSpecializationId === 0 || this.state.doctors.length == 0
                        ? <h2>Loading data</h2>
                        : <form onSubmit={this.handleSubmit}>

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
                                                    if (this.state.selectedDoctorId == 0) {
                                                        this.setSelectedDoctor(doctor.userId);
                                                    }
                                                    if (this.state.selectedSpecializationId == doctor.specialization.specializationId) {
                                                        return <option name={doctor.username} value={doctor.userId} id={doctor.userId} key={doctor.userId}>{doctor.firstName} {doctor.lastName}</option>
                                                    }
                                                }
                                            )
                                        }
                                    </select>
                                </div>

                            </div>

                            {
                                this.state.displayTime
                                    ? <div className="row">

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
                                                excludeTimes={excludedTimes}
                                                onChange={this.handleSelectedDate}
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


                                    : <div><button className="btnLogin btn btn-light" value="create" onClick={this.getTimeSlots}>Confirm doctor</button></div>
                            }




                        </form>

                }

            </div>
        );
    }
}

export default CreateExaminationComponent;