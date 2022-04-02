//importando bibliotecas
import {EntityRepository, Repository} from 'typeorm'

//importando arquivos
import { User } from '../entities/User'


@EntityRepository(User)
class UsersRepositories extends Repository<User> {

}

export {UsersRepositories}