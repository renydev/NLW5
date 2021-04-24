import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  
  private messagesRepository: Repository<User>;

  constructor() {
    this.messagesRepository = getCustomRepository(UsersRepository);
  }

  async create( email : string ) {
    // VERIFICAR SE USUÁRIO EXISTE
    const userExists = await this.messagesRepository.findOne({
      email
    });
    // SE NÃO EXISTIR, SALVAR NO DB
    if(userExists)
      return userExists

    const user = this.messagesRepository.create({
      email
    })

    await this.messagesRepository.save(user);
    // SE EXISTIR, RETORNAR USER

    return user;
  }
}
export { UsersService }