import passport from "passport";
import DiscordStrategy from "passport-discord";
import UserInterface from "../database/Models/Interfaces/User.interface";
import User from "../database/Models/User";

passport.serializeUser((user: UserInterface, done) => {
    done(null, user.userId);
});

passport.deserializeUser(async (discordId: string, done) => {
    try {
        const user = await User.findOne({ userId: discordId });
        return user ? done(null, user) : done(null, null);
    } catch(err) {
        console.error(err);

    }
});

passport.use(
    new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URI,
    scope: ["identify", "guilds"]
    }, async (accessToken, refreshToken, profile, done) => {
        const { id, username, discriminator, avatar, guilds } = profile;
        try {
            const foundUser = await User.findOneAndUpdate({ userId: id }, {
                avatar: `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`,
                tag: `${username}#${discriminator}`,
                guilds,
            });
            if (foundUser) {
                return done(null, foundUser);
            } else {
                const newUser = await User.create({
                    avatar: `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`,
                    guilds,
                    tag: `${username}#${discriminator}`,
                    userId: id,
                });
                return done(null, newUser);
            }
        } catch (err) {
            console.error(err);
            return done(err, null);
        }
    })
);