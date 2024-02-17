import OrasEvent from "../abstract/OrasEvent.js";
export default class Ready extends OrasEvent {
    constructor(client) {
        super(client);
        this.name = "ready";
        this.run = async () => {
            this.client.logger.ready(`${this.client.user.username} is Online!`);
            const activities = [
                {
                    content: `𝑲𝒊𝒏𝒈 | ${await this.client.cluster
                        .broadcastEval((x) => x.guilds.cache.size)
                        .then((result) => result.reduce((a, b) => a + b, 0))} Servers`,
                    type: 0,
                    status: `dnd`,
                },
                {
                    content: `𝑲𝒊𝒏𝒈 | ${this.client.config.prefix}help`,
                    type: 2,
                    status: `dnd`,
                },
                {
                    content: `𝑲𝒊𝒏𝒈 | ${this.client.config.prefix}play`,
                    type: 3,
                    status: `dnd`,
                },
            ];
            setInterval(() => {
                let activity = Math.floor(Math.random() * activities.length);
                this.client.user.setPresence({
                    activities: [
                        {
                            name: activities[activity].content,
                            type: activities[activity].type,
                        },
                    ],
                    status: activities[activity].status,
                });
            }, 5000);
        };
    }
}
//# sourceMappingURL=Ready.js.map
