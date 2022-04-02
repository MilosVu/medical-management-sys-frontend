import axios from 'axios';

const MEDICINE_API_BASE_URL = "http://localhost:8080/api/v1/medicines"



class MedicineService {

    getMedicines() {
        return axios.get(MEDICINE_API_BASE_URL);
    }
    createMedicine(medicines) {
        console.log(medicines);
        return axios.post(MEDICINE_API_BASE_URL, medicines);
    }
    deleteMedicine(medicine) {
        return axios.delete(MEDICINE_API_BASE_URL + "/" + medicine.medicineid);
    }

    getMedicinesByPrescriptionId(id) {
        return axios.get(MEDICINE_API_BASE_URL, id);
    }

}

export default new MedicineService();