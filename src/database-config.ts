import 'reflect-metadata'
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: 'postgres',
    database: 'ecommerce',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    synchronize: true,
    logging: true
})