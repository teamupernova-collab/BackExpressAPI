import { Create{{Name}}DTO, Update{{Name}}DTO } from "./{{name}}.types"
import {{Name}} from "./{{name}}.model"
import { ClientSession } from "mongoose"

export class {{Name}}Service {
  static async create{{Name}}( data: Create{{Name}}DTO, session?: ClientSession ) {
    return await {{Name}}.create([data], { session }).then(r => r[0])
  }

  static async getAll() {
    return await {{Name}}.find();
  }

  static async getById(id: string) {
    return await {{Name}}.findById(id);
  }

  static async update(id: string, data: Update{{Name}}DTO ) {
    return await {{Name}}.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await {{Name}}.findByIdAndDelete(id);
  }
}