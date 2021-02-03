import express from "express";
import postsController from "../controllers/posts";

const router = express.Router();

router.get("/", postsController.getPosts);
router.get("/:id", postsController.getById);

export default router;
