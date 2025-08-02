import axios from "axios";


const UseAxiosPublic = () => {
     const axiosSecure = axios.create({
        baseURL:'https://localhost:5000'
    })
    return axiosSecure;
};

export default UseAxiosPublic;