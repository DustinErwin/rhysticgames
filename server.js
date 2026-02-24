const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// // Connect to database
// const db = mysql.createConnection(
//   {
//     host: "127.0.0.1",
//     // MySQL username,
//     user: "root",
//     // {TODO: Add your MySQL password}
//     password: "rootroot",
//     database: "cdgdb",
//   },
//   console.log(`Connected to the cdgdb database.`)
// );

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
