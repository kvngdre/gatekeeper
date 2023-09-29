import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.json({ ok: true });
});

export default userRouter;
