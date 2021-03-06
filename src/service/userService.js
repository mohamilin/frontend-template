import axios from 'axios';
import authHeader from "./auth-header";

const API_PAGE = "https://server-siakad.herokuapp.com/api/"
// const API_PAGE = "http://localhost:5000/api/"

class UserService {
    getPublic() {
        return axios(API_PAGE + "all")
    }

    getUser() {
        return axios(API_PAGE + "user", {headers: authHeader()})
    }

    getMod() {
        return axios(API_PAGE + "mod", {headers: authHeader()})
    }

    getAdmin() {
        return axios(API_PAGE + "admin", {headers: authHeader()})
    }
}

export default new UserService();