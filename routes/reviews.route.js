import { Router } from "express";
import { reviewController } from "../controllers/reviews.controller.js"; 

const reviewRouter = Router();

// user routes
reviewRouter.get("/reviews", reviewController.getReviewByAdmin);
reviewRouter.post("/reviews/books", reviewController.addReviewByAdmin); 
reviewRouter.delete("/reviews/:id", reviewController.deletedReviewByAdmin);
reviewRouter.patch('/reviews/:id', reviewController.updateReviewIdByAdmin)

export{reviewRouter}