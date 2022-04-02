import axios from 'axios';


const PRESCRIPTION_MEDICINES_API_BASE_URL = "http://localhost:8080/api/v1/prescription-medicines"


class PrescriptionMedicineService {

    getPrescriptionMedicines() {
        return axios.get(PRESCRIPTION_MEDICINES_API_BASE_URL);
    }

    createPrescriptionMedicine(prescriptionMedicine) {

        console.log(prescriptionMedicine);

        axios.post(PRESCRIPTION_MEDICINES_API_BASE_URL, prescriptionMedicine);




    }


    getMedicinesByPrescriptionId(prescription) {
        return axios.get(PRESCRIPTION_MEDICINES_API_BASE_URL + "/" + prescription);
    }

}

export default new PrescriptionMedicineService();