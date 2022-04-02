import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../accounts/repositories/UsersRepositories";
import { hash } from 'bcryptjs'

//criando interface do objeto
interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string
}

class CreateUserUseCase {
  //metodo para execultar
  async execute({ name, email, admin, password }: IUserRequest) {
    //instanciando Classe
    const usersRepository = getCustomRepository(UsersRepositories)

    //verificar se está vindo email na rota
    if (!email) {
      throw new Error("Email incorrect");
    }

    //metodo para pegar unico usuário por email
    const usersAlreadyExists = await usersRepository.findOne({ email });

    //verificar se usuário existe
    if (usersAlreadyExists) {
      throw new Error("User already exists");
    }

    //criptografando senha com a biblioteca bcrypt
    const passwordHash = await hash(password, 8)
    //criando instancia de objeto
    const user = usersRepository.create({ name, email, admin : false, password: passwordHash });

    //salvando objeto na base
    await usersRepository.save(user);

    return user;
  }
}
export { CreateUserUseCase };
