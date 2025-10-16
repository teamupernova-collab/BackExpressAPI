import { Router} from "express";
import { userControllers } from "../controllers/userController";
import { authMiddleware, authRoles  } from "../middleware/auth";

const router = Router();

// create user
router.post("/register", authMiddleware, authRoles("admin", "editor"), userControllers.addUser);

//get users 
router.get("/", authMiddleware, authRoles("admin", "editor"), userControllers.getUsers)

// update user
router.put("/:id", authMiddleware, authRoles("admin", "editor"), userControllers.updateUser);

// delete user
router.delete("/:id", authMiddleware, authRoles("admin", "editor"), userControllers.deleteUser);

// get user by id
router.get("/:id", authMiddleware, authRoles("admin", "editor"), userControllers.getUserById);

export default router;