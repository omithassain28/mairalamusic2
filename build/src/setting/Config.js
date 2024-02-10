export default class OrasConfig extends Object {
    token;
    prefix;
    nodes;
    spotiId;
    owners;
    spotiSecret;
    spotiNodes;
    webhooks;
    supportId;
    color;
    server;
    botinvite;
    voteUrl;
    voteApi;
    setupBgLink;
    constructor() {
        super();
        this.token =
            "MTE5OTQxMDY1NjI5ODkyNjEyMA.GUFjtJ.hboiI457T_lFFAc9PmmVngYww71eLD7_j1B5L8";
        this.botid = "1199410656298926120"
        this.prefix = ".";
        this.nodes = [
            {
                name: `Kronix`,
                url: `lava.link:80`,
                auth: `kronix`,
                secure: false,
            },
          {
              name: `Oras`,
              url: `lava.link:80`,
              auth: `kronix`,
              secure: false,
          }, // Dont Change The Name Of Nodes
        ];
        this.voteApi =
            "";
        this.webhooks = {
            guildCreate: "https://discord.com/api/webhooks/1205476563055943742/Pompatb-X1IYuU6ERKdfT6-YVx5vXyEGAj_mrlu9LpFEqYL0EwmCWRDFezLg_PKBRJvY",
            guildDelete: "https://discord.com/api/webhooks/1205476563055943742/Pompatb-X1IYuU6ERKdfT6-YVx5vXyEGAj_mrlu9LpFEqYL0EwmCWRDFezLg_PKBRJvY",
            Cmds: "https://discord.com/api/webhooks/1205476563055943742/Pompatb-X1IYuU6ERKdfT6-YVx5vXyEGAj_mrlu9LpFEqYL0EwmCWRDFezLg_PKBRJvY",
        };
        this.server = "https://discord.gg/mairala";
        this.botinvite = `https://discord.gg/mairala`;
        this.spotiId = "e6f84fbec2b44a77bf35a20c5ffa54b8";
        this.spotiSecret = "498f461b962443cfaf9539c610e2ea81";
        this.owners = ["1022180304854728724"];
        this.color = "#45FFCA";
        this.supportId = "788884879781658644"; //Server Id
        this.spotiNodes = [
            {
                id: `Kronix`,
                host: `lava.link`,
                port: 80,
                password: `kronix`,
                secure: false,
            },
          {
              id: `Oras`,
              host: `lava.link`,
              port: 80,
              password: `kronix`,
              secure: false,
          }, // Dont Change The Name Of Nodes
        ];
        this.voteUrl = "https://discordbotlist.com/bots/rias-gremory-0912/upvote";
        this.setupBgLink =
            "https://media.discordapp.net/attachments/1190943041922535517/1190943144158691369/live_now.png?ex=65a3a33c&is=65912e3c&hm=3f442c1bd2f8b61e3be1f1c625d891df2b90334098765ca174750746912df20d&=&format=webp&quality=lossless&width=1000&height=562";
    }
}
//# sourceMappingURL=Config.js.map