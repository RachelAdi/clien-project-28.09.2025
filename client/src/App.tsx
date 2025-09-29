
import bookService from "./service/bookService";

function App() {
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
      <button onClick={handleGetBooks}>Get Books</button>
    </div>
  );
}

export default App;
