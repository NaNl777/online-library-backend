import { Router } from "express";
import { genreController} from "../controllers/genres.controller.js"
const genreRouter = Router();

genreRouter.get("/admin/genres", genreController.getGenreByAdmin);
genreRouter.post("/admin/genres", genreController.addGenreByAdmin);
genreRouter.delete("/admin/genres/:id", genreController.deleteGenreIdByAdmin);


export{genreRouter}