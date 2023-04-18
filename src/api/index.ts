import type { Request, Response } from "express";
import express from "express";
import hello from "./hello";

const router = express.Router();

router.get("/hi", (req: Request, res: Response) => {
  res.status(200).json({ message: "hi world 👋" });
});

router.get("/favicon.ico", (req: Request, res: Response) => res.status(204));
router.use("/hello", hello);

export default router;
