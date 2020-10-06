import { Router } from "express";
import passport from "passport";
const router = Router();

router.get("/", passport.authenticate("discord"))

router.get("/redirect", passport.authenticate("discord"), (req, res) => {
    res.redirect("http://localhost:3000/menu");
});

router.get("/get", (req, res) => {
    if (req.user)
        res.send(req.user);
    else
        res.status(401).json({ message: "Unauthorized" });
});


export default router;