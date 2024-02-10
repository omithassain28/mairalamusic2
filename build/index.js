import { ClusterManager, HeartbeatManager, ReClusterManager, messageType, } from "discord-hybrid-sharding";
import OrasConfig from "./src/setting/Config.js";
const Config = new OrasConfig();
const keep_alive = require('./keep_alive.js');
const manager = new ClusterManager("./build/src/oras.js", {
    totalClusters: "auto",
    totalShards: "auto",
    respawn: true,
    token: Config.token,
    shardsPerClusters: 7,
    mode: "process",
    restarts: { max: 5, interval: 60000 * 60 },
    spawnOptions: {
        amount: "auto",
        delay: 10000,
        timeout: -1,
    },
});
manager.extend(new HeartbeatManager({
    interval: 2000,
    maxMissedHeartbeats: 5,
}));
manager.extend(new ReClusterManager());
manager.on("clusterReady", (cluster) => console.log(`𝑲𝒊𝒏𝒈 | Cluster ready :${cluster.id}`));
manager.on("clusterCreate", (cluster) => {
    cluster.on("message", (message) => {
        console.log(message);
        if (message?._type !== messageType.CUSTOM_REQUEST)
            return;
        message.reply({
            content: `𝑲𝒊𝒏𝒈 | Hello Boii`,
        });
        setInterval(() => {
            cluster.send({ content: `𝑲𝒊𝒏𝒈 | I am Alive!` });
            cluster
                .request({ content: `𝑲𝒊𝒏𝒈 | Are you alive?`, alive: true })
                .then((e) => console.log(e));
        }, 5000);
    });
    console.log(`𝑲𝒊𝒏𝒈 | Cluster is Created: ${cluster.id}`);
});
manager.on("debug", (info) => console.info(`𝑲𝒊𝒏𝒈 | `,info));
manager.spawn();
process.on("unhandledRejection", async (e) => {
    console.log("𝑲𝒊𝒏𝒈 | ", e);
});
//# sourceMappingURL=index.js.map
