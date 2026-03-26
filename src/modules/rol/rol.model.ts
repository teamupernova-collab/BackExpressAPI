import mongoose, { Schema, Types } from "mongoose";
import { Rol } from "./rol.schema";

const RolSchema: Schema = new Schema<Rol>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true }
);


export default mongoose.model<Rol>("roles", RolSchema);