import fetch from "node-fetch";

export async function getGuilds() {
    const res = await fetch("http://discord.com/api/v6/users/@me/guilds", {
        method: "GET",
        headers: {
            Authorization: `Bot ${process.env.TOKEN}`,
        }
    });
    return res.json();
}