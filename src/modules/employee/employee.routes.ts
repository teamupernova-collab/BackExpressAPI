import { Router} from "express";
import { buildRoute } from "../../utils/routeBuilder";
import { z } from "../../config/zod";
import EmployeeController from "./employee.controller";
import { createEmployeeSchema, updateEmployeeSchema, employeeDbSchema } from "./employee.schema"

const router = Router();
const basePath = "/api/employee";

// CREATE
buildRoute(router, {
  method: "post",
  path: basePath,
  schema: createEmployeeSchema,
  response: employeeDbSchema,
  handler: EmployeeController.addEmployee,
  tag: "Employee",
});

// GET ALL
buildRoute(router, {
  method: "get",
  path: basePath,
  response: employeeDbSchema.array(),
  handler: EmployeeController.getEmployees,
  tag: "Employee",
});

// GET BY ID
buildRoute(router, {
  method: "get",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  response: employeeDbSchema,
  handler: EmployeeController.getEmployeeById,
  tag: "Employee",
});

// UPDATE
buildRoute(router, {
  method: "put",
  path: `${basePath}/{id}`,
  schema: updateEmployeeSchema,
  params: z.object({ id: z.string() }),
  response: employeeDbSchema,
  handler: EmployeeController.updateEmployee,
  tag: "Employee",
});

// DELETE
buildRoute(router, {
  method: "delete",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  handler: EmployeeController.deleteEmployee,
  tag: "Employee",
});

export default router;
