const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const notFoundHandler = require("./notFoundHandler");
const errorHandler = require("./errorHandler");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
connectDb();
app.use("./cors", cors);
app.use(express.json());
app.use("/posts", postsRoutes);

//error handlers
app.use("./notFound", notFoundHandler);
app.use("./Error", errorHandler);
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
