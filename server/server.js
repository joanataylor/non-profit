const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.json(), cors());

const dotenv = require("dotenv");
dotenv.config();

const connectDb = require("./config/mongoose.config");
connectDb();

// const pirateRouter = require("./routes/pirate.routes");
// app.use("/api/pirates", pirateRouter);

const colors = require("colors");
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(colors.bgGreen(`Listening on port ${PORT}`))
);
