const connectDb = require("./db/db");
const usersRouter = require("./routes/users");
const express = require("express");
const cors = require("cors");
const app = express();

connectDb();

//TODO: Test all routes in Postman. Export collection and include in repository with instructions on how to import and use with API
/**
 * POST register TESTED SUCCESS
 * POST login NOT TESTED
 * GET all users NOT TESTED
 * DELETE a user NOT TESTED
 */
//TODO: Add README with detailed instructions on how to set up and use API
//TODO: Add TODO comments and informational comments throughout to clarify concepts

//! Add instruction on installing the Better Comments extension to make instructional comments easier to interact with

app.use(cors());
app.use(express.json());
app.use(`/api/users`, usersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
