import { Router } from "express"
import userRoutes from "../modules/users/user.routes"
import authRoutes from "../modules/auth/auth.routes"
import personRoutes from "../modules/persons/person.routes"
import rolRoutes from "../modules/roles/rol.routes"

const router = Router()

router.use("/users", userRoutes)
router.use("/auth", authRoutes)
router.use("/persons", personRoutes)
router.use("/roles", rolRoutes)

export default router