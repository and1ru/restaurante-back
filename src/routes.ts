import { Router } from 'express'
import login from './moduls/login/login.route'
import auth from './moduls/Auth/Auth.route'
import logOut from './moduls/LogOut/LogOut.route'

const route = Router()

route.use(login)
route.use(auth)
route.use(logOut)

export default route