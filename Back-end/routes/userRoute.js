import express from "express";
import {getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    signInUser,
  } from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getUsers);

router.get("/users/:id", getUserById);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;