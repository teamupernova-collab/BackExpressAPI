import express, { Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { conDB } from "./database/connection";
import routes from "./routes";
import { errorMiddleware } from "./middleware/error.middlware"
import { generateSwagger } from "./config/swagger";

const app = express();
const port = process.env.PORT || 3000;

// permitir cokkies
app.use(cookieParser());

// Configuración de CORS
app.use(
  cors({
    //origin: "http://localhost:5173", // Cambia esto al dominio de tu frontend
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
  })
);

//middlewares
app.use(errorMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api", routes);

// swagger
const swaggerSpec = generateSwagger();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Ruta raíz para verificar el estado del servicio
app.get('/', (req: Request, res: Response) => {
  res.json({ mensaje: 'Bienvenido: Servicio activo' });
});


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

conDB().then(() =>
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  })
);
