import { Router} from "express";
import { userControllers } from "../controllers/userController";
//import { authMiddleware, authRoles  } from "../middleware/auth";
//TODO: agregar authMiddleware y authRoles a las rutas que lo requieran

const router = Router();

// create user
router.post("/register", userControllers.addUser);

//get users 
router.get("/", userControllers.getUsers)

// update user
router.put("/:id", userControllers.updateUser);

// delete user
router.delete("/:id", userControllers.deleteUser);

// get user by id
router.get("/:id", userControllers.getUserById);

export default router;