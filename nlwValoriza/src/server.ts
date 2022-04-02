//importando bibliotecas
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"
import "reflect-metadata";
import "./database";

//importando arquivo de rotas
import { router } from "./shared/routes/routes";

//instanciando objeto express
const app = express();

//habilitando express para trabalhar com JSON
app.use(express.json())

//middleware express use inserir rotas no express
app.use(router);

//middleware tratamento de error
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return response.status(400).json({ error: error.message })
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

//LEVANTANDO SERVIDOR NA PORTA 3000
app.listen(3000, () => console.log("Server is running"));
