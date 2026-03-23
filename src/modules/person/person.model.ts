import { Schema, model } from "mongoose";
import { Person } from "./person.schema";

const PersonSchema = new Schema<Person>(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true }
  },
  { timestamps: true }
);

export default model<Person>("persons", PersonSchema);