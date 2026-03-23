import { Schema, model } from "mongoose";
import { {{Name}} } from "./{{name}}.schema";

const {{Name}}Schema = new Schema<{{Name}}>(
  {
   
  },
  { timestamps: true }
);

export default model<{{Name}}>("{{name}}s", {{Name}}Schema);