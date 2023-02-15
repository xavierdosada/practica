import axios from "axios";

export const getProducts = () => {
    return axios.get("http://localhost:8000/products");
}

export const createUser = (body) => {
    return axios.post("http://localhost:8000/user", body);
}

export const getUsers = (id) => {
    return axios.get("http://localhost:8000/user/" + id);
}

export const login = (body) => {
    return axios.post("http://localhost:8000/user/login", body);
}