import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  
  async handle(request: Request, response: Response) {

    
    //montando objeto para receber as informações
    const { name, email, admin, password } = request.body;

    //chamando use case
    const createUserUseCase = new CreateUserUseCase();

    //criando objeto chamando metodo
    const user = await createUserUseCase.execute({ name, email, admin, password });

    //retornando informação que veio no Body
    return response.json(user);
  }
}
export { CreateUserController };
