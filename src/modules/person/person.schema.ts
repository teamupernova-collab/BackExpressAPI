import { z } from "../../config/zod";

export const basePersonSchema = z.object({
  name: z.string(),
  lastname: z.string(),
});

export const personDbSchema = basePersonSchema.extend({
  _id: z.any(),
  createdAt: z.date(),
  updatedAt: z.date(),
  __v: z.number(),
});

export const createPersonSchema = basePersonSchema;
export const updatePersonSchema = basePersonSchema
    .partial()
    .refine(data => Object.keys(data).length > 0, {
        message: "Debe enviar al menos un campo",
    });

// tipo automático
export type Person = z.infer<typeof createPersonSchema>;
export type CreatePersonDTO = z.infer<typeof createPersonSchema>;
export type UpdatePersonDTO = z.infer<typeof updatePersonSchema>;