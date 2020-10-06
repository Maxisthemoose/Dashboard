import { Document } from "mongoose";

export default interface Guild extends Document {
    guildId: string;
    prefix?: string;
    logs?: string;
}