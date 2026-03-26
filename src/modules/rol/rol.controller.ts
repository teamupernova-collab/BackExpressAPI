import { Request, Response } from "express";
import { RolService } from "./rol.services";
import { CreateRolDTO, UpdateRolDTO } from "./rol.schema"
import { asyncHandler } from "../../utils/asyncHandler"; 

class RolController {
  addRol = asyncHandler(async (req: Request, res: Response) => {

      const data: CreateRolDTO = req.body
    
      const Rol  = await RolService.createRol(data);

      res.status(201).send(Rol);
  });

  getRols =  asyncHandler(async (_req: Request, res: Response) => {
    const Rols = await RolService.getAll();
    res.send(Rols);
  });

  getRolById =  asyncHandler(async (req: Request, res: Response) => {
    const Rol = await RolService.getById(req.params.id);

    if (!Rol) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send(Rol);
  });

  updateRol = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;

    const data: UpdateRolDTO = req.body;

    const Rol = await RolService.update(id, data);

    if (!Rol) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send(Rol);
  });

  deleteRol =  asyncHandler(async (req: Request, res: Response) => {
    const deleted = await RolService.delete(req.params.id);

    if (!deleted) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send({ code: "SUCCESS" });
  });
}

export default new RolController();