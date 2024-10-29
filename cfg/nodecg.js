module.exports = {
  host: "0.0.0.0",
  port: 9090,
  baseURL: process.env.NODECG_URL ? process.env.NODECG_URL : "127.0.0.1:9090",
  login: {
    enabled: !!(
      process.env.NODECG_URL &&
      process.env.NODECG_SECRET &&
      process.env.NODECG_DISCORD_CLIENT &&
      process.env.NODECG_DISCORD_SECRET &&
      process.env.NODECG_DISCORD_SERVER_ID
    ),
    sessionSecret: process.env.NODECG_SECRET + "",
    discord: {
      enabled: true,
      clientID: process.env.NODECG_DISCORD_CLIENT + "",
      clientSecret: process.env.NODECG_DISCORD_SECRET + "",
      scope: "identify guilds",
      allowedGuilds: [
        {
          guildID: process.env.NODECG_DISCORD_SERVER_ID + "",
        },
      ],
    },
  },
  logging: {
    console: {
      enabled: true,
      timestamps: false,
      level: "info",
      replicants: false,
    },
    file: {
      enabled: true,
      timestamps: true,
      path: "logs/server.log",
      level: "verbose",
      replicants: false,
    },
  },
  ssl: {
    enabled: false,
    keyPath: "",
    certificatePath: "",
  },
};
