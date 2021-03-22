import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://value-server-1.herokuapp.com/",
  headers: {
    "Content-Type": `application/json`,
  },
});

export default apiClient;
