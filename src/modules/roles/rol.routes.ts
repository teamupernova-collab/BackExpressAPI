import { Router} from "express";
import RolController from "./rol.controller";

const router = Router();

// create Rol
router.post("/", RolController.addRol);
//get Rols
router.get("/", RolController.getRols)
// get Rol by id
router.get("/:id", RolController.getRolById);
// update Rol
router.put("/:id", RolController.updateRol);
// delete Rol
router.delete("/:id", RolController.deleteRol);

export default router;
