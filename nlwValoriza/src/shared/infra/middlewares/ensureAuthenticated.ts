import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  //receber o token 
  const authToken = request.headers.authorization

  //validar se token esta prenchido
  if (!authToken) {
    return response.status(401).json({ message: "Token missing" })
  }

  const [, token] = authToken.split(" ")

  //validar se token é valido 
  try {
    const { sub } = verify(token, "4ef6ca86da9aeb42e41441544a050e10") as IPayload

    //recuperar informações do usuário
    request.user_id = sub

    return next()

  } catch (error) {
    return response.status(401).json({ message: "Token missing" })
  }

}

