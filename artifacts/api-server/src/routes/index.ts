import { Router, type IRouter } from "express";
import healthRouter from "./health";

const router: IRouter = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Rajlav Anitech API!" });
});

router.use(healthRouter);

export default router;
