import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../accounts/repositories/UsersRepositories"
import { classToPlain } from "class-transformer";


class ListUserUseCase {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const users = await usersRepositories.find()

    return classToPlain(users)
  }
}

export { ListUserUseCase }