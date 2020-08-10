import * as dotenv from 'dotenv'
import { createConnection } from 'typeorm'
import app from './confg/server'
import Route from '../router'

dotenv.config()
app.use(Route)

app.listen( process.env.PORT ||3000,()=>{console.log("server on")})

createConnection()


