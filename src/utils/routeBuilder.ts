import { Router, RequestHandler } from "express";
import { registry } from "../config/swagger";
import { z } from "../config/zod";

type RouteConfig = {
  method: "get" | "post" | "put" | "delete";
  path: string;
  schema?: any;
  params?: any;
  response?: any;
  handler: RequestHandler;
  tag: string;
};

export const buildRoute = (router: Router, config: RouteConfig) => {
  const { method, path, schema, params, response, handler, tag } = config;

  // 🔥 registrar en swagger
  registry.registerPath({
    method,
    path,
    tags: [tag],
    request: {
      ...(params && { params }),
      ...(schema && {
        body: {
          content: {
            "application/json": {
              schema,
            },
          },
        },
      }),
    },
    responses: {
      200: {
        description: "Success",
        ...(response && {
          content: {
            "application/json": {
              schema: response,
            },
          },
        }),
      },
    },
  });

  // 🔥 registrar en express
  (router as any)[method](
    path.replace(path, ""), // importante si usas prefijo
    ...(schema ? [require("../middleware/validate.middleware").validate(schema)] : []),
    handler
  );
};