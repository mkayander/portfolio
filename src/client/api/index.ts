import axios from "axios";
import { Contact, Project } from "./models";
import config from "../utils/config";

export const api = axios.create({
    baseURL: `${config.baseUrl}/api/v1/`,
});

export const localApi = axios.create({
    baseURL: `http://localhost:3000/api/v1/`,
});

[api, localApi].forEach(instance =>
    instance.interceptors.response.use(
        response => response,
        error => {
            console.error("Axios error!: ", error.message, error.config);
            return Promise.reject(error);
        }
    )
);

export default api;

export const fetchProjectsLocally = () => localApi.get<Project[]>("projects");

export const fetchContactsLocally = () => localApi.get<Contact[]>("contacts");
