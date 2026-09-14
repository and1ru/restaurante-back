// bun add socket.io
// bun add cookie

import type { Server } from 'socket.io'
import { AuthTokenSocket } from './middleware/authTokenSocket'
import { OrdersChef } from './moduls/get_orders_chef/get_orders_chef'
import { initSocket } from './helper/socket'
import { updateOrder } from './moduls/update_order/update_order'
import { OrdersWaitress } from './moduls/get_orders_waitress/get_orders_waitress'

export const socketRoutes = (io:Server) => {
    initSocket(io)
    // token middleware
    AuthTokenSocket(io)
    // routes
    OrdersChef(io)
    updateOrder(io)
    OrdersWaitress(io)
}