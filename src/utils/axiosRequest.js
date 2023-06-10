import axios from "axios";

const axiosApi = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
  });

const axiosFile = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL_FILE,
    headers:{
      "Content-Type":'multipart/form-data'
    },
  });

  export {axiosApi, axiosFile}