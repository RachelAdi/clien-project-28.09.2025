import http from "./httpService";

const bookService = {
  getAllBooks: () => http.get("/books/items"),
};

export default bookService;
