import Axios from 'axios';

const axios = Axios.create({
    baseURL: process.env.BACKEND_URL || "https://meowtech-backend.herokuapp.com",
});

axios.interceptors.response.use(
    function (res){
        return res;
    },
    function (err){
        console.log(err?.response ? err?.response?.data?.errors[0]: err?.message);
        
        return Promise.reject(err);
    }
)

export default axios;