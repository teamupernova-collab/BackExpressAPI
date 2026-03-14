import { Router} from "express";
import UserController from "./user.controller";
//import { authMiddleware, authRoles  } from "../middleware/auth";
//TODO: agregar authMiddleware y authRoles a las rutas que lo requieran

const router = Router();

// create user
router.post("/", UserController.addUser);

//get users 
router.get("/", UserController.getUsers)

// update user
router.put("/:id", UserController.updateUser);

// delete user
router.delete("/:id", UserController.deleteUser);

// get user by id
router.get("/:id", UserController.getUserById);

export default router;