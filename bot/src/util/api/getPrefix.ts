import axios from "axios";

export function getConfig (id: string) {
    return axios.get(`${process.env.BASE_URI}/api/discord/guilds/${id}/config`);
}