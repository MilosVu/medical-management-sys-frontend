import axios from 'axios';

const MEDICINE_API_BASE_URL = "http://localhost:8080/api/v1/medicines"

class MedicineService{

    getMedicines(){
        return axios.get(MEDICINE_API_BASE_URL);
    }

}

export default new MedicineService();