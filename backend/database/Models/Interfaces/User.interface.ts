import { Document } from "mongoose";

export default interface User extends Document {
    userId: string;
    tag: string;
    avatar: string;
    guilds: {
        owner: boolean;
        permissions: number;
        icon: string;
        id: string;
        name: string;
    }[];
}