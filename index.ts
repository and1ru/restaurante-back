import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { errorMiddleware } from './src/middleware/errorMiddleware'
import routes from "./src/routes"
import { Server } from 'socket.io'
import { createServer } from 'http'
import { socketRoutes } from './src/socket.routes'

const app = express()
app.use(cors({origin:"http://localhost:5173", credentials:true}))
app.use(cookieParser())
app.use(express.json())
app.use(routes)

const httpServer = createServer(app)
const io = new Server(httpServer, {cors:{origin:"http://localhost:5173", credentials:true}})

socketRoutes(io)

app.use(errorMiddleware)

httpServer.listen(3000, () => {
    console.log("escuchando en el puerto 3000")
})