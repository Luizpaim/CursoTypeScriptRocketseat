import { Request, Response } from "express"
import { CreateComplimentUseCase } from "./CreateComplimentUseCase"


class CreateComplimentController {

  async handle(request: Request, response: Response) {
    const { tag_id,
      user_receiver,
      message
    } = request.body
    const { user_id } = request

    const createComplimentUseCase = new CreateComplimentUseCase()
    const compliment = await createComplimentUseCase.execute({
      tag_id, user_receiver, user_sender: user_id, message
    })

    return response.json(compliment)
  }
}
export { CreateComplimentController }