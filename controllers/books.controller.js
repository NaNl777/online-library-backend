import { Book } from "../models/Book.model.js";

const bookController = {
//Functions admin interface
  adminUpdateBookById: async (req, res) => {
    try {
      const adminUpdateBookById = await Book.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      return res.json(adminUpdateBookById);
    } catch (error) {
      console.log(error.message);
    }
  },

  adminGetBook: async (req, res) => {
    try {
      const getBook = await Book.find({});
      return res.json(getBook);
    } catch (error) {
      console.log(error.message);
    }
  },

  adminDeleteBook: async (req, res) => {
    try {
      const deleteBook = await Book.findByIdAndDelete(req.params.id);
      return res.json(deleteBook);
    } catch (error) {
      console.log(error.message);
    }
  },

  adminAddBook: async (req, res) => {
    try {
      const adminAddBook = await Book.create({
        name: req.body.name,
        author: req.body.author,
        genreId: req.body.genreId,
        user: req.body.user,
      });
      return res.json(adminAddBook);
    } catch (error) {
      console.log(error.message);
    }
  },

//Functions user interface

  userGetBookById: async (req, res) => {
    try {
      const userGetBookById = await Book.findById(req.params.id);
      return res.json(userGetBookById);
    } catch (error) {
      console.log(error.message);
    }
  },

  userGetBook: async(req, res) => {
    try {
        const userGetBook = await Book.find({});
        return res.json(userGetBook)
    } catch (error) {
        console.log(error.message)
    }
  },
  
  userGetBookByGenre: async(req, res) => {
    try {
        const userGetBookByGenre = await Book.find({genre: req.params.id})
        return res.json(userGetBookByGenre)
    } catch (error) {
        console.log(error.message)
    }
  }
};

export { bookController };
