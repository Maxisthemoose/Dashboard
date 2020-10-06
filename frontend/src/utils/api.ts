import axios from "axios";

export function getDetails () {
    return axios.get(`http://localhost:3001/api/login/get`, {
        withCredentials: true,
    });
}

export function getGuilds () {
    return axios.get(`http://localhost:3001/api/discord/guilds`, {
        withCredentials: true,
    });
}

export function updatePrefix (id: string, prefix: string) {
    return axios.put(`http://localhost:3001/api/discord/guilds/${id}/prefix`, {
        prefix
    }, {
        withCredentials: true,
    });
}

export function getPrefix (id: string) {
    return axios.get(`http://localhost:3001/api/discord/guilds/${id}/config`, {
        withCredentials: true,
    });
}