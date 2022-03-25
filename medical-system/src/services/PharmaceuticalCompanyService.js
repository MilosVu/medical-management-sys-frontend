import axios from 'axios';

const PHARMACEUTAL_COMPANY_API_BASE_URL = "http://localhost:8080/api/v1/pharmaceutical-company"

class PharmaceuticalCompanyService {

    getCompanies() {
        return axios.get(PHARMACEUTAL_COMPANY_API_BASE_URL);
    }
    createCompany(pharmaceuticalCompany) {
        return axios.post(PHARMACEUTAL_COMPANY_API_BASE_URL, pharmaceuticalCompany);
    }

    getCompanyById(company) {
        return axios.get(PHARMACEUTAL_COMPANY_API_BASE_URL, company);
    }

}

export default new PharmaceuticalCompanyService();