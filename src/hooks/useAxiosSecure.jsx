import React from "react";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_apiURL}`,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
