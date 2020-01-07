const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const path = require("path");

// routes
const books = require("./routes/api/books");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("Hello world!"));

// use Routes
app.use("/api/books", books);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("bookshelf/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "bookshelf", "build", "index.html"));
  });
}

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
