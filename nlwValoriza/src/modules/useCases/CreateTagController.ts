import { Request, Response } from "express";
import {CreateTagUseCase} from './CreateTagUseCase'


class CreateTagController {
async handle(request: Request, response: Response){
const { name } = request.body
const createTagUseCase = new CreateTagUseCase();

const tag = await createTagUseCase.execute(name)

return response.json(tag)

}}
export { CreateTagController}