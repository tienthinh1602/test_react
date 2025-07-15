import React, { useState } from "react";

const initialBooks = [
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 },
  { title: "You Don’t Know JS", author: "Kyle Simpson", year: 2014 }
];

const BookList = () => {
  const [books, setBooks] = useState(initialBooks);
  const [showAuthor, setShowAuthor] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "", year: "" });
  const [error, setError] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    const exists = books.some(
      (book) => book.title.toLowerCase() === newBook.title.toLowerCase()
    );

    if (exists) {
      setError("This book title already exists!");
      return;
    }

    setBooks((prev) => [...prev, { ...newBook, year: +newBook.year }]);
    setNewBook({ title: "", author: "", year: "" });
    setError("");
  };

  return (
    <div className="book-container">
      <h2>📚 Book Manager</h2>

      <input
        className="book-search"
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        className="book-toggle-btn"
        onClick={() => setShowAuthor((prev) => !prev)}
      >
        {showAuthor ? "🙈 Hide Authors" : "👀 Show Authors"}
      </button>

      <ul className="book-list">
        {filteredBooks.map((book, index) => (
          <li key={index} className="book-item">
            <strong>{book.title}</strong> ({book.year})
            {showAuthor && <p>Author: {book.author}</p>}
          </li>
        ))}
      </ul>

      <h3>Add a New Book</h3>
      <form onSubmit={handleAddBook} className="book-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={newBook.year}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="book-add-btn">Add Book</button>
      </form>

      {error && <p className="book-error">{error}</p>}
    </div>
  );
};

export default BookList;
