import Joi from "joi"

export const createPersonSchema = Joi.object({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
});