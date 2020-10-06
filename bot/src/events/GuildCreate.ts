import { Guild } from "discord.js";
import StarrClient from "../util/structures/BaseClient";
import BaseEvent from "../util/structures/BaseEvent";

export default class GuildCreate extends BaseEvent {
    constructor() {
        super({
            name: "guildCreate",
            description: "Fires on bot joining a server",
        });
    }
    async run (client: StarrClient, guild: Guild) {
        // const newGuild = new Gld({
        //     guildId: guild.id,
        // });
        // await newGuild.save();
    }
}