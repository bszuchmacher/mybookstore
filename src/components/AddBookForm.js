import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getBooks } from "../actions/BookAction";
import "./AddBookForm.scss";

const AddBookForm = ({ books, addBook, getBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook({ title: title, author: author, price: price, category: category, cover: imageSrc });
    setTitle("");
    setAuthor("");
    setPrice("");
    setCategory("");
    setImageSrc("");
  };

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div className="add-book-form">
      <p>Add your book to the list:</p>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          name="title"
          value={title}
          placeholder="Book title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          name="author"
          value={author}
          placeholder="Book author"
          onChange={(event) => setAuthor(event.target.value)}
        />
        <input
          name="price"
          value={price}
          placeholder="Price"
          onChange={(event) => setPrice(event.target.value)}
        />
        <input
          name="category"
          value={category}
          placeholder="Category"
          onChange={(event) => setPrice(event.target.value)}
        />
        <input
          className="image-inpt"
          name="imageSrc"
          value={imageSrc}
          placeholder="Book image cover url www..."
          onChange={(event) => setImageSrc(event.target.value)}
        />
        <button type="submit">Add new</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch({ type: "CREATE", payload: book }),
  getBooks: () => dispatch(getBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBookForm);
