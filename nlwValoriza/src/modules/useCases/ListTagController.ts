import { Response, Request } from "express";
import { ListTagUseCase } from "./ListTagUseCase";

class ListTagController {

  async handle(request: Request, response: Response) {
    const listTagUseCase = new ListTagUseCase()
    const tags = await listTagUseCase.execute()

    return response.json(tags)
  }

}
export { ListTagController }