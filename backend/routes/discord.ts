//@ts-nocheck
import { Router } from "express";
const router = Router();
import { getGuilds } from "../utils/api";
import User from "../database/Models/User";
import { checkGuilds } from "../utils/utils";
import Guild from "../database/Models/Guild";
import { WebSocket } from "../WebSocket";
router.get("/guilds", async (req, res) => {
    const guilds = await getGuilds();
    const user = await User.findOne({ userId: req.user.userId });
    if (user) {
        const userGuilds = user.guilds;

        const mutualGuilds = checkGuilds(userGuilds, guilds);

        res.send(mutualGuilds);
    } else {
        res.status(401).json({ "message": "Unauthorized" });
    }
});

router.put("/guilds/:guildId/prefix", async (req, res) => {
    const { prefix } = req.body;

    if (!prefix) return res.status(400).json({ message: "Prefix Required" });

    const { guildId } = req.params;
    const guild = await Guild.findOne({ guildId });

    if (!guild) return res.status(404).json({ message: "Guild Not Found" });

    if (guild.prefix === prefix) return res.status(403).json({ message: "Prefix can not be updated to the same value" });

    guild.prefix = prefix;

    try {
        await guild.updateOne(guild);
    } catch (err) {
        return res.status(500).json({ "message": "Something went wrong." });
    }

    const socket = WebSocket.getSocket();
    socket.emit("prefix-update", guildId, prefix);
    return res.status(200).json({ prefix, message: "Success" });
});

router.get("/guilds/:guildId/config", async (req, res) => {
    const { guildId } = req.params;
    const guild = await Guild.findOne({ guildId });
    return guild ? res.send(guild) : res.status(404).json({ message: "Guild Not Found" });
});


export default router;