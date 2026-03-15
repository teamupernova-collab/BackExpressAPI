import { Router} from "express";
import EmployeeController from "./employee.controller";

const router = Router();

// create Employee
router.post("/", EmployeeController.addEmployee);
//get Employees
router.get("/", EmployeeController.getEmployees)
// get Employee by id
router.get("/:id", EmployeeController.getEmployeeById);
// update Employee
router.put("/:id", EmployeeController.updateEmployee);
// delete Employee
router.delete("/:id", EmployeeController.deleteEmployee);

export default router;
