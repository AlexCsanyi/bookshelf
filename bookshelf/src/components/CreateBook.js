import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

export default class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      isbn: "",
      author: "",
      description: "",
      published_date: "",
      publisher: "",
      src: "",
      resource: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher,
      src: this.state.src,
      resource: this.state.resource
    };

    axios
      .post("/api/books", data)
      .then(res => {
        this.setState({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
          src: "",
          resource: ""
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("An error occured while creating book.");
      });
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br></br>
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Book List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">Create New Book</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Title of the book"
                    name="title"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChange}
                  ></input>
                </div>
                <br></br>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="ISBN"
                    name="isbn"
                    className="form-control"
                    value={this.state.isbn}
                    onChange={this.onChange}
                  ></input>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    className="form-control"
                    value={this.state.author}
                    onChange={this.onChange}
                  ></input>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Short Description"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChange}
                  ></input>
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    name="published_date"
                    className="form-control"
                    value={this.state.published_date}
                    onChange={this.onChange}
                  ></input>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Publisher"
                    name="publisher"
                    className="form-control"
                    value={this.state.publisher}
                    onChange={this.onChange}
                  ></input>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Image Link"
                    name="src"
                    className="form-control"
                    value={this.state.src}
                    onChange={this.onChange}
                  ></input>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Link to online web address"
                    name="resource"
                    className="form-control"
                    value={this.state.resource}
                    onChange={this.onChange}
                  ></input>
                </div>

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
