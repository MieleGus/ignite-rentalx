import { createConnection } from "typeorm";

console.log("arq datbase    @#$#@dsodas");
createConnection({
    type: "postgres",
    port: 5432,
    host: "172.21.0.2",
    username: "docker",
    password: "ignite",
    database: "rentx",
    migrations: ["./src/database/migrations/*.ts"],
    entities: ["./src/modules/**/entities/*.ts"],
    cli: {
        migrationsDir: "./src/database/migrations",
    },
});
