import express from "express";
import usersController from "../controllers/users";

const router = express.Router();

router.get("/:id", usersController.getUsersById);
router.get("/", usersController.getUsers);

export default router;