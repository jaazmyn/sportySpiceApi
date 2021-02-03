import express from "express";
import postsController from "../controllers/posts";

const router = express.Router();

router.get("/", postsController.getPosts);

export default router;
