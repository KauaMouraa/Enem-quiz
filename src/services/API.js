import axios from "axios";

export const API = axios.create({
    baseURL:"https://api.enem.dev/v1"
});