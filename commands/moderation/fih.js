module.exports = {
    name: "fih",
	aliases: ["latency"],
    category: "moderation",
    description: "Fivem Israel Hub Support",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`**שימו :heart:  שכל יום אתם יכולים לשים ריאקשן מחדש!**
https://discord.gg/YDdyeEY3Mf `);
    }
}
