import { Request, Response } from "express";
import { PersonService } from "./person.services";
import { createPersonSchema } from "./person.schema";
import { CreatePersonDTO, UpdatePersonDTO } from "./person.types"
import { asyncHandler } from "../../utils/asyncHandler"; 

class PersonController {
  addPerson = asyncHandler(async (req: Request, res: Response) => {
      const { error } = createPersonSchema.validate(req.body);

      if (error) {
        return res.status(400).send(error.message);
      }

      const data: CreatePersonDTO = req.body
    
      const person  = await PersonService.createPerson(data);

      res.status(201).send(person);
  });

  getPersons =  asyncHandler(async (_req: Request, res: Response) => {
    const persons = await PersonService.getAll();
    res.send(persons);
  });

  getPersonById =  asyncHandler(async (req: Request, res: Response) => {
    const person = await PersonService.getById(req.params.id);

    if (!person) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send(person);
  });

  updatePerson = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;

    const data: UpdatePersonDTO = req.body;

    const person = await PersonService.update(id, data);

    if (!person) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send(person);
  });

  deletePerson =  asyncHandler(async (req: Request, res: Response) => {
    const deleted = await PersonService.delete(req.params.id);

    if (!deleted) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send({ code: "SUCCESS" });
  });
}

export default new PersonController();