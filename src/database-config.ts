import 'reflect-metadata'
import { DataSource } from "typeorm"
import { User } from './entities/User'

export const AppDataSource = new DataSource({
    type: 'postgres',
    database: 'ecommerce',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    synchronize: true,
    logging: true,
    entities: [User]
})