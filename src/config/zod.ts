import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

// 🔥 extender UNA sola vez
extendZodWithOpenApi(z);

export { z };