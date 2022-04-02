import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";



class ListUserController {
  async handle(request: Request, response: Response) {

    const listUserUseCase = new ListUserUseCase()
    const users = await listUserUseCase.execute()

    return response.json(users)
  }
}
export { ListUserController }