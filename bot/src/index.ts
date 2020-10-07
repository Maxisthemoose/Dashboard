import Client from "./util/structures/BaseClient";
import { config } from "dotenv";
config();

const BaseClient = new Client({ 
    defaultPrefix: "?", 
    owners: [ "408080307603111936" ], 
    baseOptions: { 
        partials: ["MESSAGE", "REACTION"] 
    } 
});



BaseClient.start(); // Start the client