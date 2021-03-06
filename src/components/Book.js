import React, { useState } from "react";
import { connect } from "react-redux";
import "./Book.scss";

const Book = ({ book, deleteBook, updateBook }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageSrc, setImageSrc] = useState(book.cover);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBook({ id: book.id, title: title, author: author, price: price, category: category, cover: imageSrc  });
    setIsEdit(false);
  };

  return (
    <div className="book">
      {isEdit ? (
        <article>
          <form className="updateBookForm" onSubmit={(event) => handleSubmit(event)}>
            <input
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              name="author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
            <input
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <input
              name="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
            <input
              name="imageSrc"
              value={imageSrc}
              onChange={(event) => setImageSrc(event.target.value)}
            />
            <button type="submit">Update book</button>
          </form>
        </article>
      ) : (
        <article>
          <div className="image">
            <img src={book.cover} alt={book.title} />
          </div>
          <div className="content">
            <h2>{book.title}</h2>
            <h6>{book.author}</h6>
            <h6>{book.price}</h6>
            <h6>{book.category}</h6>
            <nav>
              <button
                className="remove-btn"
                type="button"
                name="delete"
                onClick={() => deleteBook(book.id)}
              >
                Remove
              </button>
              <button
                className="edit-btn"
                type="button"
                name="edit"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            </nav>
          </div>
        </article>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteBook: (id) => dispatch({ type: "DELETE", payload: id }),
  updateBook: (book) => dispatch({ type: "UPDATE", payload: book }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
