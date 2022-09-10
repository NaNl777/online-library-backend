import { Router } from "express";
import { bookController } from "../controllers/books.controller.js";

const bookRouter = Router();

bookRouter.get('/users/books', bookController.userGetBook)
bookRouter.get('/users/books/:id', bookController.userGetBookById)
bookRouter.get('/users/books/genre', bookController.userGetBookByGenre)

bookRouter.post('/admin/books', bookController.adminAddBook)
bookRouter.patch('/admin/books/:id', bookController.adminUpdateBookById)
bookRouter.delete('/admin/books/:id', bookController.adminDeleteBook)  
bookRouter.get('/admin/books', bookController.adminGetBook)

export{bookRouter}