import { Router } from "express";
import { StatusCodes } from 'http-status-codes'
const router = Router();

router.get("/", (req, res) => {
  return res.send("Hello");
});

router.post("/test", (req, res) => {
  return res.json(req.body);
});

export { router }