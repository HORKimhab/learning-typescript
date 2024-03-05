import { DataSource } from "typeorm"
import { Client } from "./entities/Client"


const main = async () => {
    try {
        const AppDataSource = new DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'typeorm_crash_course1',
            entities: [Client],
            logging: true,
            synchronize: true,
        });

        // Wait for the connection to be established
        await AppDataSource.initialize();

        console.log("Connected to MySQL successfully.");

        // Do any additional setup or start your application logic here...

    } catch (error) {
        console.error("Error during Data Source initialization", error);
    }
}

main();
