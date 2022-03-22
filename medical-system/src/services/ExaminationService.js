import axios from 'axios';

const EXAMINATION_API_BASE_URL = "http://localhost:8080/api/v1/examinations"

class ExaminationService {

    getExaminations() {
        return axios.get(EXAMINATION_API_BASE_URL);
    }

    createExamination(examinations) {
        return axios.post(EXAMINATION_API_BASE_URL, examinations);
    }

    getExaminationsForDoctor(user) {
        return axios.get(EXAMINATION_API_BASE_URL + "/doctor/" + user);
    }

    getExaminationsForPatient(user) {
        return axios.get(EXAMINATION_API_BASE_URL + "/patient/" + user);
    }

}

export default new ExaminationService();