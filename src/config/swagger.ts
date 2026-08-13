import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
} from "@asteasolutions/zod-to-openapi";

export const registry = new OpenAPIRegistry();

export const generateSwagger = () => {
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://upernovaapi.onrender.com/",
        description: "Servidor de Producción (Render)",
      },
      {
        url: "http://localhost:8080/",
        description: "Servidor Local (Desarrollo)",
      },
    ],
  });
};