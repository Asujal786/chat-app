import express from "express";
import { signUp } from "../controllers/auth";

const router = express.Router();

router.post("/login", (req, res) => {
  res.send("Login Route");
});

router.post("/signOut", (req, res) => {
  res.send("Signout Route");
});

router.post("/signUp", signUp);

export default router;
