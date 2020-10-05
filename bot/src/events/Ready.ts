import Guild from "../database/models/Guild";
import StarrClient from "../util/structures/BaseClient";
import BaseEvent from "../util/structures/BaseEvent";

export default class Ready extends BaseEvent {
    constructor() {
        super({
            name: "ready",
            description: "Ready event",
        });
    }
    async run (client: StarrClient): Promise<any> {
        console.log(`Logged in as ${client.user.username} in ${client.guilds.cache.size} servers!`);

        for (const [__, guild] of client.guilds.cache) {
            const foundGuild = await Guild.findOne({ guildId: guild.id });
            if (foundGuild) client.cachedPrefixes.set(guild.id, foundGuild.prefix);
            else Guild.create({ guildId: guild.id }).then(async g => { 
                const gi = await g.save();
                client.cachedPrefixes.set(guild.id, gi.prefix);
            });
        }
    }
}