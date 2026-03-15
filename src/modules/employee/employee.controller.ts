import { Request, Response } from "express";
import { EmployeeService } from "./employee.services";
import { CreateEmployeeSchema } from "./employee.schema";
import { CreateEmployeeDTO, UpdateEmployeeDTO } from "./employee.types"
import { asyncHandler } from "../../utils/asyncHandler"; 

class EmployeeController {
  addEmployee = asyncHandler(async (req: Request, res: Response) => {
      const { error } = CreateEmployeeSchema.validate(req.body);

      if (error) {
        return res.status(400).send(error.message);
      }

      const data: CreateEmployeeDTO = req.body
    
      const Employee  = await EmployeeService.createEmployee(data);

      res.status(201).send(Employee);
  });

  getEmployees =  asyncHandler(async (_req: Request, res: Response) => {
    const Employees = await EmployeeService.getAll();
    res.send(Employees);
  });

  getEmployeeById =  asyncHandler(async (req: Request, res: Response) => {
    const Employee = await EmployeeService.getById(req.params.id);

    if (!Employee) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send(Employee);
  });

  updateEmployee = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;

    const data: UpdateEmployeeDTO = req.body;

    const Employee = await EmployeeService.update(id, data);

    if (!Employee) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send(Employee);
  });

  deleteEmployee =  asyncHandler(async (req: Request, res: Response) => {
    const deleted = await EmployeeService.delete(req.params.id);

    if (!deleted) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send({ code: "SUCCESS" });
  });
}

export default new EmployeeController();