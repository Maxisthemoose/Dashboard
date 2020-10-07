import { getConfig } from "../util/api/getPrefix";
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
            const { data } = await getConfig(guild.id);
            const prefix = data.prefix;
            client.cachedPrefixes.set(guild.id, prefix);
            console.log(`Cached prefix: ${prefix}, for guild: ${guild.name}`);
        }
    }
}