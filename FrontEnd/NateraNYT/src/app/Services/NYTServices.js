import axios from 'axios';

const BASE_URL = "http://localhost:8088"

class NYTServices{
    getAllNews = () =>{
        return axios.get(BASE_URL+"/getAllWithClass");
    }
}

export default new NYTServices();