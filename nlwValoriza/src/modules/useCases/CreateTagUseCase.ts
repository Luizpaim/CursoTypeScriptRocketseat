import { getCustomRepository } from "typeorm"
import { TagsRepositories } from '../accounts/repositories/TagsRepositories'


class CreateTagUseCase {

  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    //verificar se o campo está preenchido
    if (!name) {
      throw new Error("Incorrect name !")
    }

    //verificar se existe a informação
    const tagAlreadyExists = await tagsRepositories.findOne({
      name
    })

    //se existir campo
    if (tagAlreadyExists) {
      throw new Error("Tag already exists!")
    }

    const tag = tagsRepositories.create({
      name
    })

    await tagsRepositories.save(tag);

    return tag;
  }
}
export { CreateTagUseCase }