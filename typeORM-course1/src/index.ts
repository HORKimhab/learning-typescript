import { DataSource } from "typeorm"
import { Client } from "./entities/Client"
import { Banker } from "./entities/Banker"
import { Transaction } from "./entities/Transaction";
import express from "express";
import { createClientRouter } from "./routes/create_client";
import { createBakerRouter } from "./routes/create_bankers";

const app = express(); 

const main = async () => {
    try {
        const AppDataSource = new DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'typeorm_crash_course1',
            entities: [Client, Banker, Transaction],
            logging: true,
            synchronize: true,
        });

        // Wait for the connection to be established
        await AppDataSource.initialize();

        console.log("Connected to MySQL successfully.");

        app.use(express.json());
        app.use(createClientRouter);
        app.use(createBakerRouter);

        app.listen(8080, () => {
            console.log('Now running on port 8080');
        })

        // Do any additional setup or start your application logic here...

    } catch (error) {
        console.error("Error during Data Source initialization", error);
    }
}

main();
