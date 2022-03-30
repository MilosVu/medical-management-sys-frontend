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
        console.log(examination);
        examination.dateOfExamination.setHours( examination.dateOfExamination.getHours() + 2 );
        return axios.post(EXAMINATION_API_BASE_URL, examination);
    }

    getExaminationsForDoctor(user) {
        return axios.get(EXAMINATION_API_BASE_URL + "/doctor/" + user);
    }

    getExaminationsForPatient(user) {
        return axios.get(EXAMINATION_API_BASE_URL + "/patient/" + user);
    }

    getExcludedDates(doctorId){

        return axios.get(EXAMINATION_API_BASE_URL + "/doctor/" + doctorId).then((res) => {

            const getProp = prop => obj => new Date (obj[prop]);
            const getDateOfExamination = getProp('dateOfExamination');
            const dates = res.data.map(getDateOfExamination);

            return dates;
        });

    }

}

export default new ExaminationService();