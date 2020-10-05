import { Message } from "discord.js";
import StarrClient from "../../util/structures/BaseClient";
import { BaseCommand } from "../../util/structures/BaseCommand";

export default class Ping extends BaseCommand {
    constructor() {
        super({
            category: "general",
            description: "Ping",
            name: "ping",
            permissions: ["SEND_MESSAGES"],
            usage: "ping",
            aliases: ["pong"]
        });
    }
    async run (client: StarrClient, message: Message, args: string[]): Promise<any> {
        
    }
}