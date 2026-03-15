import { Router } from "express"
import userRoutes from "../modules/user/user.routes"
import authRoutes from "../modules/auth/auth.routes"
import personRoutes from "../modules/person/person.routes"
import rolRoutes from "../modules/rol/rol.routes"
import companyRoutes from '../modules/company/company.routes';
import employeeRoutes from '../modules/employee/employee.routes'
import clientRoutes from '../modules/client/client.routes'

const router = Router()

router.use("/users", userRoutes)
router.use("/auth", authRoutes)
router.use("/persons", personRoutes)
router.use("/roles", rolRoutes)
router.use("/company", companyRoutes)
router.use("/employee" , employeeRoutes)
router.use("/client", clientRoutes)

export default router