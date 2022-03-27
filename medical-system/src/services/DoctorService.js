import axios from 'axios';

const DOCTOR_API_BASE_URL = "http://localhost:8080/api/v1/doctors"

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users"

class DoctorService {

    getDoctors() {
        return axios.get(DOCTOR_API_BASE_URL);
    }

    createDoctor(doctor) {
        return axios.post(DOCTOR_API_BASE_URL, doctor);
    }

    deleteDoctor(doctor) {
        return axios.delete(USER_API_BASE_URL + "/" + doctor.userid);
    }

}

export default new DoctorService();