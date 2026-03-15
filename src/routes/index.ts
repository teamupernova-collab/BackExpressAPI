import { Router } from "express"
import userRoutes from "../modules/users/user.routes"
import authRoutes from "../modules/auth/auth.routes"
import personRoutes from "../modules/persons/person.routes"
import rolRoutes from "../modules/roles/rol.routes"
import companyRoutes from '../modules/companies/company.routes';
import employeeRoutes from '../modules/employees/employee.routes'

const router = Router()

router.use("/users", userRoutes)
router.use("/auth", authRoutes)
router.use("/persons", personRoutes)
router.use("/roles", rolRoutes)
router.use("/company", companyRoutes)
router.use("/employee" , employeeRoutes)

export default router