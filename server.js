const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/dbConnect");

// connect to db
connectDB();

// routes
app.use(express.json());
app.use(cors());
app.use("/user", require("./routes/User"));
app.use("/contact", require("./routes/Contact"));
// create server
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on ${PORT}`)
);
