import mongoose, { Schema, Document } from "mongoose";

interface IRol extends Document {
    name: string;
    description: string;
}

const RolSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true }
);


export default mongoose.model<IRol>("roles", RolSchema);