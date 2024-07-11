import axios from "axios";

const client = axios.create({
  baseURL: "https://goit-task-manager.herokuapp.com",
});

const setAuthHeader = (token) => {
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  client.defaults.headers.common.Authorization = "";
};

export { client, setAuthHeader, clearAuthHeader };
