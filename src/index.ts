import express, { Request, Response, NextFunction } from "express";
import { conDB } from "./database/connection";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes";
import { errorMiddleware } from "./middleware/error.middlware"

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


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

conDB().then(() =>
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  })
);
