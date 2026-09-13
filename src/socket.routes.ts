// bun add socket.io
// bun add cookie

import type { Server } from 'socket.io'
import { AuthTokenSocket } from './middleware/authTokenSocket'
import { Orders } from './moduls/get_orders/get_orders'
import { initSocket } from './helper/socket'

export const socketRoutes = (io:Server) => {
    initSocket(io)
    // token middleware
    AuthTokenSocket(io)
    // routes
    Orders(io)
}