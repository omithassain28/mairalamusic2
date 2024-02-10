import { Connectors, Shoukaku } from "shoukaku";
import reconnection from "./Reconnection.js";
export default class OrasShoukaku extends Shoukaku {
    constructor(client) {
        super(new Connectors.DiscordJS(client), client.config.nodes, {
            reconnectTries: 2,
            resumeKey: "King",
            resumeTimeout: 30,
            restTimeout: 10000,
            moveOnDisconnect: true,
            resume: false,
        });
        this.on("ready", (name) => {
            client.logger.ready(`𝑲𝒊𝒏𝒈 | ${name} Node got connected`);
            reconnection(client);
            client.logger.log(`𝑲𝒊𝒏𝒈 | Client has been reconnected to all of the 24/7 Connections`);
        });
        this.on("error", (error) => client.logger.error(`𝑲𝒊𝒏𝒈 | Node got some errors: ${error}`));
        this.on("disconnect", (name) => client.logger.warn(`𝑲𝒊𝒏𝒈 | ${name} Node got disconnected!`));
        this.on("reconnecting", (name) => client.logger.warn(`𝑲𝒊𝒏𝒈 | ${name} Node is reconnecting`));
        this.on("close", (name, code, reason) => client.logger.warn(`𝑲𝒊𝒏𝒈 | ${name} Node got Closed due to reason: ${reason}, Code: ${code}`));
    }
}