import http from "./httpService";

interface LoginResponse {
  token: string;
}

const authService = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    const response = await http.post("/books/login", { username, password });
    return response.data;
  }
};

export default authService;
