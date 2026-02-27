import mongoose, { Schema, Document } from "mongoose";
import Joi from "joi";

const PersonSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        lastname: { type: String, required: true },
    },
    { timestamps: true }
);

interface IPerson extends Document {
    name: string;
    lastname: string;
}

export const PersonSchemaVali = Joi.object({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
});

export default mongoose.model<IPerson>("Person", PersonSchema);