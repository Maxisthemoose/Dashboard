import StarrClient from "../util/structures/BaseClient";
import BaseEvent from "../util/structures/BaseEvent";
import { Message as Msg } from "discord.js";
import { BaseCommand } from "../util/structures/BaseCommand";

export default class Message extends BaseEvent {
    constructor() {
        super({
            name: "message",
            description: "Message Event",
        });
    }
    async run (client: StarrClient, message: Msg) {
        if (!message.guild) return;
        if (message.author.bot) return;

        const prefix = client.cachedPrefixes.get(message.guild.id) || client.defaultPrefix;

        if (!message.content.startsWith(prefix)) return;

        
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandName = args.shift().toLowerCase();

        const commandFile: BaseCommand = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));

        if (commandFile) {
            commandFile.run(client, message, args);
        }
    }
}