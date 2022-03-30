import axios from 'axios';

const PRESCRIPTION_API_BASE_URL = "http://localhost:8080/api/v1/prescriptions"



class PrescriptionService {

    getPrescriptions() {
        return axios.get(PRESCRIPTION_API_BASE_URL);
    }
    createPrescription(prescription) {
        console.log(prescription);
        return axios.post(PRESCRIPTION_API_BASE_URL, prescription);
    }
    deleteMedicine(prescription) {
        return axios.delete(PRESCRIPTION_API_BASE_URL + "/" + prescription.prescriptionId);
    }

}

export default new PrescriptionService();