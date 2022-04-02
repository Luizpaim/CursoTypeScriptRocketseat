import { Request, Response} from "express"
import { ListReceiveComplimentsByUserUseCase } from "./ListUserReceiveComplimentsUseCase"

class ListReceiverComplimentsByUserController {

  async handle(request: Request, response: Response) {

    const { user_id } = request

    const listUserReceiverComplimentsUseCase = new ListReceiveComplimentsByUserUseCase()

    const compliments = await listUserReceiverComplimentsUseCase.execute(user_id)

    return response.json(compliments)

  }

}
export { ListReceiverComplimentsByUserController }