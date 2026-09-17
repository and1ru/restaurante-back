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


// login.controller -> mejorar la forma en la que se esta guardando el token
// login.route -> agregar middleware de rate limit
// el custom erro debe capturar errores de prisma
// create_dish.service -> eliminar la imagen en caso de que no se pueda crear el dish
// revisar get_dishes_admin - get_dishes_owner - get_dishes_waitress