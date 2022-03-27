import axios from 'axios';

const SPECIALIZATION_COMPANY_API_BASE_URL = "http://localhost:8080/api/v1/specializations"

class SpecializationService {

    getSpecializations() {
        return axios.get(SPECIALIZATION_COMPANY_API_BASE_URL);
    }
    createSpecialization(specializations) {
        return axios.post(SPECIALIZATION_COMPANY_API_BASE_URL, specializations);
    }

    getSpecializationById(id) {
        return axios.get(SPECIALIZATION_COMPANY_API_BASE_URL + "/" + id);
    }

    deleteSpecialization(specialization) {
        return axios.delete(SPECIALIZATION_COMPANY_API_BASE_URL + "/" + specialization.specializationId);
    }
}

export default new SpecializationService();