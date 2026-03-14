import Joi from "joi";

export const RolSchemaVali = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
});