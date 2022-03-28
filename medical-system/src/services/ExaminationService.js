import axios from 'axios';
import moment from "moment";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

const arrDates = [
    new Date(2021, 4, 20, 8, 15), //Thu May 20 2021 08:15:00
    new Date(2021, 4, 20, 8, 45), //Fri May 20 2021 08:45:00
    new Date(2021, 4, 21, 8, 30), //Sat May 21 2021 08:30:00
    new Date(2021, 4, 21, 9, 0) //Sat May 21 2021 09:00:00
];

const EXAMINATION_API_BASE_URL = "http://localhost:8080/api/v1/examinations"

class ExaminationService {

    getExaminations() {
        return axios.get(EXAMINATION_API_BASE_URL);
    }

    deleteExamination(examination) {
        return axios.delete(EXAMINATION_API_BASE_URL + "/" + examination.examinationId);
    }

    createExamination(examination) {
        return axios.post(EXAMINATION_API_BASE_URL, examination);
    }

    getExaminationsForDoctor(user) {
        return axios.get(EXAMINATION_API_BASE_URL + "/doctor/" + user);
    }

    getExaminationsForPatient(user) {
        return axios.get(EXAMINATION_API_BASE_URL + "/patient/" + user);
    }

    async getExcludedTimes(date) {
        let arrSpecificDates = [];

        for (let i = 0; i < arrDates.length; i++) {
            if (
                moment(date, moment.ISO_8601).format("YYYY/MM/DD") ===
                moment(arrDates[i], moment.ISO_8601).format("YYYY/MM/DD")
            ) {
                arrSpecificDates.push(moment(arrDates[i], moment.ISO_8601).toObject());
            }
        }

        let arrExcludedTimes = [];
        for (let i = 0; i < arrSpecificDates.length; i++) {
            arrExcludedTimes.push(setHours(setMinutes(new Date(arrSpecificDates[i].minutes), arrSpecificDates[i].hours)));
        }
        return arrExcludedTimes;
    }

}

export default new ExaminationService();