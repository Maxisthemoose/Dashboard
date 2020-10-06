export function checkGuilds(userGuilds: any, botGuilds: any) {
    return userGuilds.filter((guild: any) => botGuilds.find((g: any) => g.id === guild.id) && (guild.permissions & 0x20) === 0x20);
}