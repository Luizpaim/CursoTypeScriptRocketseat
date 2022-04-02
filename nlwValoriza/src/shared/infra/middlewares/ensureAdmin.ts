import { Response, Request, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../../modules/accounts/repositories/UsersRepositories";


export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

  const { user_id } = request

  const userRepositories = getCustomRepository(UsersRepositories)

  //verificar se o usuário é admin 

  const { admin } = await userRepositories.findOne(user_id)

  if (admin) {
    return next()
  }
  return response.status(401).json({ error: "Unauthorize" })
}