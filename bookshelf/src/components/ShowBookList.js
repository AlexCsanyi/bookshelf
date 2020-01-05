import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

export default class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/books")
      .then(res => {
        this.setState({
          books: res.data
        });
      })
      .catch(err => {
        console.log("Error while collecting the data!");
      });
  }

  render() {
    const books = this.state.books;
    let bookList;

    if (!books) {
      bookList = "There are no books on the shelf!";
    } else {
      bookList = books.map((book, key) => (
        <BookCard book={book} key={key}></BookCard>
      ));
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br></br>
              <h2 className="display-4 text-center">Books on the shelf</h2>
            </div>

            <div className="col-md-11">
              <Link
                to="/create-book"
                className="btn btn-outline-warning float-right"
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
          <div className="list">{bookList}</div>
        </div>
      </div>
    );
  }
}
