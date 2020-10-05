import { Router } from "express";
const router = Router();

import login from "./login";
import discord from "./discord";

router.use("/login", login);
router.use("/discord", discord);

export default router;