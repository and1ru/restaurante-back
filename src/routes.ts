import { Router } from 'express'
import login from './moduls/login/login.route'
import auth from './moduls/Auth/Auth.route'
import logOut from './moduls/LogOut/LogOut.route'
import createRestaurant from './moduls/create_restaurant/create_restaurant.route'

const route = Router()

route.use(login)
route.use(auth)
route.use(logOut)
route.use(createRestaurant)

export default route