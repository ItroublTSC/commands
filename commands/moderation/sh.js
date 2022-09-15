module.exports = {
    name: "sh",
	aliases: ["latency"],
    category: "moderation",
    description: "Servers Hub Support",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`**שימו :heart:  שכל יום אתם יכולים לשים ריאקשן מחדש!**
https://discord.gg/D2v6aNDshM`);
    }
}
