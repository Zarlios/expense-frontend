import api from "./api";

export const loginUser = (username, password) => api.post("/login", { username, password });
export const RegisterUser = (username, password) => api.post("/login", { username, password });

export const logoutUser = () => api.get("/logout");
