import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

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