import { Router } from "express";
import { userController } from "../controllers/users.controller.js";
const userRouter = Router();

// user routes
userRouter.patch("/users/take/:id", userController.takeBookForUser); // user добавляет книгу
userRouter.patch("/users/return/:id", userController.returnBookForUser); // user возвращает книгу

// admin routes
userRouter.get("/admin/users", userController.getUserByAdmin);
userRouter.post("/admin/users", userController.addUserByAdmin);
userRouter.delete("/admin/users/:id", userController.deleteUserByAdmin);
userRouter.patch("/admin/users/:id", userController.takeBookAndBlockUser); // user возвращает книгу

export{userRouter}
