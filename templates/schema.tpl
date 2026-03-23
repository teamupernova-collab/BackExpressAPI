import { z } from "../../config/zod";

export const base{{Name}}Schema = z.object({

});

export const {{name}}DbSchema = base{{Name}}Schema.extend({
  _id: z.any(),
  createdAt: z.date(),
  updatedAt: z.date(),
  __v: z.number(),
});

export const create{{Name}}Schema = base{{Name}}Schema;
export const update{{Name}}Schema = base{{Name}}Schema
    .partial()
    .refine(data => Object.keys(data).length > 0, {
        message: "Debe enviar al menos un campo",
    });

// tipo automático
export type {{Name}} = z.infer<typeof create{{Name}}Schema>;
export type Create{{Name}}DTO = z.infer<typeof create{{Name}}Schema>;
export type Update{{Name}}DTO = z.infer<typeof update{{Name}}Schema>;