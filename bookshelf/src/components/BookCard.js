import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import pic from "./placeholder_img.jpg";

const BookCard = props => {
  const book = props.book;

  return (
    <div className="card-container">
      <img src={book.src === "" ? pic : book.src} alt="book cover" />
      <div className="desc">
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
