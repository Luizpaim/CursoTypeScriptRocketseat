import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../accounts/repositories/TagsRepositories"
import { classToPlain } from "class-transformer"

class ListTagUseCase {

  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    const tags = await tagsRepositories.find()

    return classToPlain(tags)
  }
}

export {
  ListTagUseCase
}