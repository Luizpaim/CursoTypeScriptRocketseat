import { Request, Response } from "express"
import { ListSendComplimentsByUserUseCase } from "./ListUserSendComplimentsUseCase"

class ListSendComplimentsByUserController {

  async handle(request: Request, response: Response) {

    const { user_id } = request

    const listUserSendComplimentsUseCase = new ListSendComplimentsByUserUseCase()

    const compliments = await listUserSendComplimentsUseCase.execute(user_id)

    return response.json(compliments)

  }

}
export { ListSendComplimentsByUserController }