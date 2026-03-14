import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().min(6).required()
});

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});