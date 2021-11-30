const connectDb = require("./db/db");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const express = require("express");
const cors = require("cors");
const app = express();

connectDb();

app.use(cors());
app.use(express.json());
app.use(`/api/users`, usersRouter);
app.use(`/api/auth`, authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
