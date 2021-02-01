import express from "express";
import postsController from "../controllers/posts";

const router = express.Router();

router.get("/", postsController.logRequest, postsController.logPosts);

export default router;
