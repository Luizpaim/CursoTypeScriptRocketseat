import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../accounts/repositories/ComplimentsRepositories"
import { UsersRepositories } from "../accounts/repositories/UsersRepositories"


interface IComplimentRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

class CreateComplimentUseCase {

  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {

    const complimentsReositories = getCustomRepository(ComplimentsRepositories)
    const usersRepositories = getCustomRepository(UsersRepositories)

    if (user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver")
    }



    const userReceiverExists = await usersRepositories.findOne(user_receiver)
    if (!userReceiverExists) {
      throw new Error("User Receiver does not exists!")
    }

    const compliment = complimentsReositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })


    await complimentsReositories.save(compliment)
    return compliment

  }

}
export { CreateComplimentUseCase }