import axios from "axios";

const axiosPublic =axios.create({
    baseURL: 'https://y-two-ruby.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;