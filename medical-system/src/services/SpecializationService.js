import axios from 'axios';

const SPECIALIZATION_COMPANY_API_BASE_URL = "http://localhost:8080/api/v1/specializations"

class SpecializationService {

    getSpecializations() {
        return axios.get(SPECIALIZATION_COMPANY_API_BASE_URL);
    }
    createSpecialization(specializations) {
        return axios.post(SPECIALIZATION_COMPANY_API_BASE_URL, specializations);
    }

}

export default new SpecializationService();