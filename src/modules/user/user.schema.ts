import Joi from "joi"

export const createUserSchema = Joi.object({
  personID: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
})

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
})