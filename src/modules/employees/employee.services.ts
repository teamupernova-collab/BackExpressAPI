import { CreateEmployeeDTO, UpdateEmployeeDTO } from "./employee.types"
import Employee from "./employee.model"
import { ClientSession } from "mongoose"

export class EmployeeService {
  static async createEmployee( data: CreateEmployeeDTO, session?: ClientSession ) {
    return await Employee.create([data], { session }).then(r => r[0])
  }

  static async getAll() {
    return await Employee.find();
  }

  static async getById(id: string) {
    return await Employee.findById(id);
  }

  static async update(id: string, data: UpdateEmployeeDTO ) {
    return await Employee.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await Employee.findByIdAndDelete(id);
  }
}