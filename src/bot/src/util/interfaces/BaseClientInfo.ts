import { Snowflake, ClientOptions } from "discord.js";

export default interface BaseClientOptions {
    defaultPrefix: string;
    owners: Array<Snowflake>;
    baseOptions?: ClientOptions;
}