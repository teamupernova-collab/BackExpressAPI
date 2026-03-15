import { Schema, model, Types } from "mongoose";

export interface IPerson {
  name: string
  lastname: string
}

const PersonSchema = new Schema<IPerson>(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true }
  },
  { timestamps: true }
);

export default model<IPerson>("persons", PersonSchema);