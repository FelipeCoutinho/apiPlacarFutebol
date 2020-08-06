import { createConnection } from 'typeorm'
import app from './confg/server'
import Route from '../router'


app.use(Route)

app.listen(3000,()=>{console.log("server on")})

createConnection()


