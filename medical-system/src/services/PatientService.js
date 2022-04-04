import axios from 'axios';

const PATIENT_API_BASE_URL = "http://localhost:8080/api/v1/patients"

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users"

class PatientService {

    getPatients() {
        return axios.get(PATIENT_API_BASE_URL);
    }
    createPatients(patients) {
        return axios.post(PATIENT_API_BASE_URL, patients);
    }

    deletePatient(patient) {
        return axios.delete(USER_API_BASE_URL + "/" + patient.userId);
    }

}

export default new PatientService();