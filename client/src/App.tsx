import bookService from "./service/bookService";
import authService from "./service/authService";

function App() {
  const handleLogin = async () => {
    try {
      const username = "adi";
      const password = "1234";

      const data = await authService.login(username, password);
      console.log("Token received:", data.token);

      localStorage.setItem("token", data.token);
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };
  const handleGetBooks = async () => {
    try {
      const response = await bookService.getAllBooks();
      console.log("Books from server:", response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div>
      <h1>Books Client</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetBooks}>Get Books</button>
      <button
        onClick={async () => {
          await authService.logout();
          console.log("Logged out successfully");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;
