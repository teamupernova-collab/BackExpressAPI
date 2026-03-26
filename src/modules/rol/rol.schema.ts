import { z } from "../../config/zod";

export const baseRolSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const rolDbSchema = baseRolSchema.extend({
  _id: z.any(),
  createdAt: z.date(),
  updatedAt: z.date(),
  __v: z.number(),
});

export const createRolSchema = baseRolSchema;
export const updateRolSchema = baseRolSchema
    .partial()
    .refine(data => Object.keys(data).length > 0, {
        message: "Debe enviar al menos un campo",
    });

// tipo automático
export type Rol = z.infer<typeof baseRolSchema>;
export type CreateRolDTO = z.infer<typeof createRolSchema>;
export type UpdateRolDTO = z.infer<typeof updateRolSchema>;