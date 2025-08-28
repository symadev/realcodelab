import axios from "axios";


const UseAxiosPublic = () => {
   const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
});

    return axiosSecure;
};

export default UseAxiosPublic;