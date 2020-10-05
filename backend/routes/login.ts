import { Router } from "express";
import passport from "passport";
const router = Router();

router.get("/", passport.authenticate("discord"))

router.get("/redirect", passport.authenticate("discord"), (req, res) => {
    res.json({ message: "Success" });
});

router.get("/get", (req, res) => {
    res.send(req.user);
});


export default router;