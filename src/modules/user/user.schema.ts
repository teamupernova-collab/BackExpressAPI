import { z } from "../../config/zod";

export const baseUserSchema = z.object({
  personID: z.any(),
  username: z.string(),
  password: z.string(),
});

export const userDbSchema = baseUserSchema.extend({
  _id: z.any(),
  createdAt: z.date(),
  updatedAt: z.date(),
  __v: z.number(),
});

export const createUserSchema = baseUserSchema;
export const updateUserSchema = baseUserSchema
    .partial()
    .refine(data => Object.keys(data).length > 0, {
        message: "Debe enviar al menos un campo",
    });

// tipo automático
export type User = z.infer<typeof createUserSchema>;
export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserDTO = z.infer<typeof updateUserSchema>;