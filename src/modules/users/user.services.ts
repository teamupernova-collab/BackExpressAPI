import { CreateUserDTO, UpdateUserDTO } from "./user.types"
import User from "./user.model"
import { ClientSession } from "mongoose"

export class UserService {
  static async createUser( data: CreateUserDTO, session?: ClientSession ) {
    return await User.create([data], { session }).then(r => r[0])
  }

  static async getAll() {
    return await User.find();
  }

  static async getById(id: string) {
    return await User.findById(id);
  }

  static async getByUserName(username: string){
    return await User.findOne({ username }).select("username password");
  }

  static async update(id: string, data: UpdateUserDTO ) {
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await User.findByIdAndDelete(id);
  }
}