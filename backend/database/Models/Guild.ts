import { Schema, model } from "mongoose";
import Guild from "./Interfaces/Guild.interface";

const guild = new Schema({
    guildId: { type: String, required: true },
    prefix: { type: String, default: "?" },
    logs: { type: String, default: "" },
});

export default model<Guild>("guilds", guild);