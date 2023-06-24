import axiosClient from "./axiosClient.mjs";
export const postApi = {
  getAll: (params) => {
    const url = "/forecast.json";
    return axiosClient.get(url, { params });
  }
};
