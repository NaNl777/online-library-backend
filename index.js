import express from "express";
import mongoose from "mongoose";
import { bookRouter } from "./routes/books.route.js";
import { genreRouter } from "./routes/genres.route.js";
import { reviewRouter } from "./routes/reviews.route.js";
import { userRouter } from "./routes/users.route.js";

const dbUrl = "mongodb+srv://zelim:Ru95@cluster0.09gco.mongodb.net/onlineBook";
const app = express();
app.use(express.json())
app.use(bookRouter)
app.use(userRouter);
app.use(reviewRouter);
app.use(genreRouter);

const port = 3080;

const start = async(req, res) => {
  try {
    await mongoose.connect(dbUrl)
    console.log('Connected..')
    app.listen(port, () => {
        console.log('Server has been started...')
    })
  } catch (error) {
    console.log(error.message)
  }
}

start();