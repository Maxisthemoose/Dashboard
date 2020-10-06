import axios from "axios"

export function updatePrefix (guildId: string, prefix: string) {
    return axios.put(`${process.env.BASE_URI}/api/discord/guilds/${guildId}/prefix`, {
        prefix,
    });
}