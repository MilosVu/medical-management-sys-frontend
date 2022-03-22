import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users"

class UserService{

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    getUser(id){
        return axios.get(USER_API_BASE_URL + "/" + id);
    }

}

export default new UserService();