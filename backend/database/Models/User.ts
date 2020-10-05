import { model, Schema } from "mongoose";
import User from "./Interfaces/User.interface";

const User = new Schema({
    userId: { type: String, required: true },
    tag: { type: String, required: true },
    avatar: { type: String, required: true },
    guilds: { type: Array, required: true },
});

export default model<User>("users", User);