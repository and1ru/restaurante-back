import { Router } from 'express'
import login from './moduls/login/login.route'
import auth from './moduls/Auth/Auth.route'
import logOut from './moduls/LogOut/LogOut.route'
import createRestaurant from './moduls/create_restaurant/create_restaurant.route'
import createBranch from './moduls/create_branch/create_branch.route'
import branches from './moduls/get_branches/get_branches.route'
import categories from './moduls/get_categories/get_categories.route'
import createCategory from './moduls/create_category/create_category.route'
import hire from './moduls/hire/hire.route'

const route = Router()

route.use(login)
route.use(auth)
route.use(logOut)
route.use(createRestaurant)
route.use(createBranch)
route.use(branches)
route.use(categories)
route.use(createCategory)
route.use(hire)

export default route