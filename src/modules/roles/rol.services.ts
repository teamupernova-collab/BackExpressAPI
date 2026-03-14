import { CreateRolDTO, UpdateRolDTO } from "./rol.types"
import Rol from "./rol.model"
import { ClientSession } from "mongoose"

export class RolService {
  static async createRol( data: CreateRolDTO, session?: ClientSession ) {
    return await Rol.create([data], { session }).then(r => r[0])
  }

  static async getAll() {
    return await Rol.find();
  }

  static async getById(id: string) {
    return await Rol.findById(id);
  }

  static async update(id: string, data: UpdateRolDTO ) {
    return await Rol.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await Rol.findByIdAndDelete(id);
  }
}