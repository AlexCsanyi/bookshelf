const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const path = require('path')

// routes
const books = require("./routes/api/books");
const app = express();

// connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello World!"));

// use Routes
app.use("/api/books", books);

const port = process.env.PORT || 8082;

if(process.env.NODE_ENV === 'production') {
    app.use(express.static( 'bookshelf/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'bookshelf', 'build', 'index.html'))
    })
}

app.listen(port, () => console.log(`Server is running on port ${port}`));
