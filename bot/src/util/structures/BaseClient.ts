import { Client, Snowflake, Guild, Channel, ClientOptions, Constants } from "discord.js"
import BaseClientInfo from "../interfaces/BaseClientInfo";
import SnipeData from "../interfaces/SnipeData";
import CommandHandler from "../../handlers/CommandHandler"; // Import the command handler
import EventHandler from "../../handlers/EventHandler"; // Import the event handler
import { connect } from "socket.io-client";
const socket = connect("http://localhost:3001");

export default class StarrClient extends Client {
    defaultPrefix: string;
    commands: Map<string, any>;
    aliases: Map<string, string>;
    owners: Array<Snowflake>;
    snipes: Map<string, SnipeData>;
    baseOptions: ClientOptions;
    cachedPrefixes: Map<string, string>;
    colors: {
        noColor: "#2F3136",
    }

    constructor(public StarrClientInfo: BaseClientInfo) {
        super(StarrClientInfo.baseOptions);
        this.defaultPrefix = StarrClientInfo.defaultPrefix;
        this.commands = new Map();
        this.aliases = new Map();
        this.owners = StarrClientInfo.owners;
        this.snipes = new Map();
        this.baseOptions = StarrClientInfo.baseOptions;
        this.cachedPrefixes = new Map();
        this.colors = {
            noColor: "#2F3136",
        }

        socket.on("prefix-update", (guildId: string, data: string) => {
            this.cachedPrefixes.set(guildId, data);
        });
    };

    private getToken(): string | undefined {
        return process.env.TOKEN;
    }

    public async getDBGuildPrefix(guild: Guild) {


    }
    public getSnipe(client: StarrClient, guild: Guild, channel: Channel): SnipeData {
        const toget = JSON.stringify({ guild: guild.id, channel: channel.id });
        const snipedata = client.snipes.get(toget);
        return snipedata;
    }
    public start(): void {
        Constants.DefaultOptions.ws.properties.$browser = "Discord iOS";
        this.login(this.getToken());
        CommandHandler.load("./bot/src/commands", ["general"], this); // Execute both to initialize the commands and events
        EventHandler.load("./bot/src/events", this);
    }
}