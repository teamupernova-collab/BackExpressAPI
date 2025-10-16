import { Router, Request, Response } from "express";
import { commentControllers } from "../controllers/commentController";
import { authMiddleware } from "../middleware/auth";

const router = Router();

// show all comments of a task
router.get("/:id", authMiddleware, commentControllers.getComments);

// add comments
router.post("/:id", authMiddleware, commentControllers.addComment);

// delete comments nota: se utiliza put porque los comentarios estan dentro de los tasks
router.put("/delete/:id", authMiddleware, commentControllers.deleteComment);

// update comments
router.put("/update/:id", authMiddleware, commentControllers.editComment);

export default router;