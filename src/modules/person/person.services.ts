import { CreatePersonDTO , UpdatePersonDTO } from "./person.types"
import Person from "./person.model"
import { ClientSession } from "mongoose"

export class PersonService {
  static async createPerson( data: CreatePersonDTO, session?: ClientSession ) {
    return await Person.create([data], { session }).then(r => r[0])
  }

  static async getAll() {
    return await Person.find();
  }

  static async getById(id: string) {
    return await Person.findById(id);
  }

  static async update(id: string, data: UpdatePersonDTO ) {
    return await Person.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await Person.findByIdAndDelete(id);
  }
}