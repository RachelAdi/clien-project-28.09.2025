import http from "./httpService";

interface LoginResponse {
  token: string;
}

const authService = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    const response = await http.post("/books/login", { username, password });
    return response.data;
  },
  logout: async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    await http.post("/books/logout", { token });

    localStorage.removeItem("token");
  }
};
export default authService;
