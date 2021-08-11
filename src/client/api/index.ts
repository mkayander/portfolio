import axios from "axios";
import { Project } from "./models";

export const api = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "blablalbla" : "https://localhost:3000/api/",
});

export default api;

export const fetchProjects = () => api.get<Project[]>("projects");
