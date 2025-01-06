import 'reflect-metadata'
import { AppDataSource } from './database-config'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const port = process.env.PORT

const initializeServer = async () => {
    try {
        await AppDataSource.initialize()
        console.log('Banco conectado!')

        app.listen(port, () => {
            console.log(`Servidor rodando em localhost:${port}`)
        })
    } catch (error) {
        
    }
}

initializeServer()