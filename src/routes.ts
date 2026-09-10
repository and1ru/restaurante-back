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
import employees from './moduls/Employee/Employee.route'
import createDish from './moduls/create_dish/create_dish.route'
import dishes from './moduls/get_dishes/get_dishes.route'
import createBranchDish from './moduls/create_branch_dish/create_branch_dish.route'
import updateBranchDish from './moduls/update_branch_dish/update_branch_dish.route'

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
route.use(employees)
route.use(createDish)
route.use(dishes)
route.use(createBranchDish)
route.use(updateBranchDish)

export default route