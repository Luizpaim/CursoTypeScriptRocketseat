import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../accounts/repositories/UsersRepositories"

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateRequest) {

    const userRepositories = getCustomRepository(UsersRepositories);

    //verificar se email existe
    const user = await userRepositories.findOne({
      email
    });
    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    //verificar se a senha está correta
    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    //gerar token 
    const token = sign({
      email: user.email
    }, "4ef6ca86da9aeb42e41441544a050e10", {
      subject: user.id,
      expiresIn: "1d"
    });

    return token
  }
}
export { AuthenticateUserUseCase }