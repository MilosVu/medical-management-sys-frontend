import axios from 'axios';

const DOCTOR_API_BASE_URL = "http://localhost:8080/api/v1/doctors"

class DoctorService {

    getDoctors() {
        return axios.get(DOCTOR_API_BASE_URL);
    }
    createDoctor(doctors) {
        return axios.post(DOCTOR_API_BASE_URL, doctors);
    }

}

export default new DoctorService();