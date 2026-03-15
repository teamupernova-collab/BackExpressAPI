import Joi from "joi";

export const CreateRolSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
});