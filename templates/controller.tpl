import { Request, Response } from "express";
import { {{Name}}Service } from "./{{name}}.services";
import { Create{{Name}}Schema } from "./{{name}}.schema";
import { Create{{Name}}DTO, Update{{Name}}DTO } from "./{{name}}.types"
import { asyncHandler } from "../../utils/asyncHandler"; 

class {{Name}}Controller {
  add{{Name}} = asyncHandler(async (req: Request, res: Response) => {
      const { error } = Create{{Name}}Schema.validate(req.body);

      if (error) {
        return res.status(400).send(error.message);
      }

      const data: Create{{Name}}DTO = req.body
    
      const {{Name}}  = await {{Name}}Service.create{{Name}}(data);

      res.status(201).send({{Name}});
  });

  get{{Name}}s =  asyncHandler(async (_req: Request, res: Response) => {
    const {{Name}}s = await {{Name}}Service.getAll();
    res.send({{Name}}s);
  });

  get{{Name}}ById =  asyncHandler(async (req: Request, res: Response) => {
    const {{Name}} = await {{Name}}Service.getById(req.params.id);

    if (!{{Name}}) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send({{Name}});
  });

  update{{Name}} = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;

    const data: Update{{Name}}DTO = req.body;

    const {{Name}} = await {{Name}}Service.update(id, data);

    if (!{{Name}}) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send({{Name}});
  });

  delete{{Name}} =  asyncHandler(async (req: Request, res: Response) => {
    const deleted = await {{Name}}Service.delete(req.params.id);

    if (!deleted) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send({ code: "SUCCESS" });
  });
}

export default new {{Name}}Controller();