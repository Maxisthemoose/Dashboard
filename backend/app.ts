import express from "express";
import { config } from "dotenv";
import passport from "passport";
import session from "express-session";
import Store from "connect-mongo";
import mongoose from "mongoose";
import cors from "cors";

const store = Store(session);
config();
import("./strategies/discord");

const PORT = process.env.PORT || 3001;

import("./database/database");
import routes from "./routes/index";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}))

app.use(session({
    secret: "ClientSecret",
    cookie: {
        maxAge: 60000 * 60 * 24,
    },
    resave: false,
    saveUninitialized: false,
    store: new store({
        mongooseConnection: mongoose.connection
    }),
}))
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));