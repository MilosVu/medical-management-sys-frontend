import axios from 'axios';

const PRESCRIPTION_API_BASE_URL = "http://localhost:8080/api/v1/prescriptions"
const PRESCRIPTION_MEDICINES_API_BASE_URL = "http://localhost:8080/api/v1/prescription-medicines"
const EXAMINATION_API_BASE_URL = "http://localhost:8080/api/v1/examinations"

class PrescriptionService {

    getPrescriptions() {
        return axios.get(PRESCRIPTION_API_BASE_URL);
    }

    getPrescription(id) {
        return axios.get(PRESCRIPTION_API_BASE_URL + '/' + id);
    }


    getPrescriptionsByPatient(id) {
        return axios.get(PRESCRIPTION_API_BASE_URL + '/patient/' + id);
    }

    createPrescription(prescription) {
        console.log(prescription);
        axios.post(PRESCRIPTION_API_BASE_URL, prescription);
    }

    deleteMedicine(prescription) {
        return axios.delete(PRESCRIPTION_API_BASE_URL + "/" + prescription.prescriptionId);
    }

    getPrescriptionById(examination) {
        return axios.get(PRESCRIPTION_API_BASE_URL + "/" + examination.examinationId);
    }

}

export default new PrescriptionService();