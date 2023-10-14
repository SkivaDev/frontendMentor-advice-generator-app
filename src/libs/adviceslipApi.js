import axiosClient from "./axiosClient";

const adviceslipApi = {

  getRandomAdvice: (params) => {
      const url = 'advice';
      return axiosClient.get(url, params);
  },

}

export default adviceslipApi;