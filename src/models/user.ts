import mongoose, { Schema, Document } from "mongoose";
import Joi from "joi";

const UserSchema: Schema = new Schema(
  {
    personId: { type: Schema.Types.ObjectId, ref: "Person", required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
  },
  {
    timestamps: true, // Agrega automáticamente createdAt y updatedAt
  }
);

interface IUser extends Document {
  personId: mongoose.Types.ObjectId;
  username: string;
  password: string;
}

export const UserSchemaVali = Joi.object({
  personId: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const LoginSchemaVali = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});





export default mongoose.model<IUser>("User", UserSchema);
