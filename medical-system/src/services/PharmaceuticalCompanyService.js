import axios from 'axios';

const PHARMACEUTAL_COMPANY_API_BASE_URL = "http://localhost:8080/api/v1/pharmaceutical-company"

class PharmaceuticalCompanyService {

    getCompanies() {
        return axios.get(PHARMACEUTAL_COMPANY_API_BASE_URL);
    }


}

export default new PharmaceuticalCompanyService();