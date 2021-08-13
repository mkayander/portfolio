import axios from "axios";
import { Contact, Project } from "./models";

export const api = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "blablalbla" : "http://localhost:3000/api/v1/",
});

api.interceptors.response.use(
    response => response,
    error => {
        console.error("Axios error!: ", error.message, error.config);
        return Promise.reject(error);
    }
);

export default api;

export const fetchProjects = () => api.get<Project[]>("projects");

export const fetchContacts = () => api.get<Contact[]>("contacts");
