import { Message } from "discord.js";
import { updatePrefix } from "../../util/api/updatePrefix";
import StarrClient from "../../util/structures/BaseClient";
import { BaseCommand } from "../../util/structures/BaseCommand";

export default class Prefix extends BaseCommand {
    constructor() {
        super({
            category: "general",
            description: "Update the bot prefix",
            name: "prefix",
            permissions: ["MANAGE_GUILD"],
            usage: "prefix <New Prefix>",
        });
    }
    async run (client: StarrClient, message: Message, args: string[]) {
        const prefix = args[0];

        if (!prefix) return message.channel.send("You can't update the prefix to nothing!");

        try {
            const { data } = await updatePrefix(message.guild.id, prefix);
            const updatedPrefix = data.prefix;
            client.cachedPrefixes.set(message.guild.id, prefix);
            return message.channel.send(`Successfully updated ${message.guild.name}'s prefix to ${updatedPrefix}`);
        } catch (err) {
            console.log(err);
            return message.channel.send("Something went wrong while trying to update the prefix in the database.");
        }

    }
}