import { CreateClientDTO, UpdateClientDTO } from "./client.types"
import Client from "./client.model"
import { ClientSession } from "mongoose"

export class ClientService {
  static async createClient( data: CreateClientDTO, session?: ClientSession ) {
    return await Client.create([data], { session }).then(r => r[0])
  }

  static async getAll() {
    return await Client.find();
  }

  static async getById(id: string) {
    return await Client.findById(id);
  }

  static async update(id: string, data: UpdateClientDTO ) {
    return await Client.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await Client.findByIdAndDelete(id);
  }
}