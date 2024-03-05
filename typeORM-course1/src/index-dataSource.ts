import { DataSource } from "typeorm"
import { Client } from "./entities/Client"
import { Banker } from "./entities/Banker"
import { Transaction } from "./entities/Transaction";
import express from "express";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_bankers";
import { createTransactionRouter } from "./routes/create_transaction";
import { createBankerToClientRouter } from "./routes/connect_banker_to_client";
import { softDelteClientRouter } from "./routes/soft_delete_client";
import { getClientRouter } from "./routes/get_clients";

const app = express(); 

const dataSource  = new DataSource({
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

const main = async () => {
    try {
        // const AppDataSource = new DataSource({
        //     type: 'mysql',
        //     host: 'localhost',
        //     port: 3306,
        //     username: 'root',
        //     password: '',
        //     database: 'typeorm_crash_course1',
        //     entities: [Client, Banker, Transaction],
        //     logging: true,
        //     synchronize: true,
        // });

        // Wait for the connection to be established
        await dataSource.initialize();

        console.log("Connected to MySQL successfully.");

        app.use(express.json());
        app.use(createClientRouter);
        app.use(createBankerRouter);
        app.use(createTransactionRouter);
        app.use(createBankerToClientRouter);
        app.use(softDelteClientRouter);
        app.use(getClientRouter);

        app.listen(8080, () => {
            console.log('Now running on port 8080');
        })

        // Do any additional setup or start your application logic here...

    } catch (error) {
        console.error("Error during Data Source initialization", error);
    }
}

main();

export default dataSource;
