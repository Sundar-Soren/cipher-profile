const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8800"],
    credentials: true,
  })
);
app.use(express.json());

const userRoutes = require("./Routers/UserRouters");

const DATABASE_URL = process.env.DATABASE;
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api", userRoutes);

app.listen(8000, () => console.log("Server is running on 8000 port"));
