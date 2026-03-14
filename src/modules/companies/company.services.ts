import { CreateCompanyDTO, UpdateCompanyDTO } from "./company.types"
import Company from "./company.model"
import { ClientSession } from "mongoose"

export class CompanyService {
  static async createCompany( data: CreateCompanyDTO, session?: ClientSession ) {
    return await Company.create([data], { session }).then(r => r[0])
  }

  static async getAll() {
    return await Company.find();
  }

  static async getById(id: string) {
    return await Company.findById(id);
  }

  static async update(id: string, data: UpdateCompanyDTO ) {
    return await Company.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await Company.findByIdAndDelete(id);
  }
}