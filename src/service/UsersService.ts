import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  async create( email : string ) {
    const usersRepository = getCustomRepository(UsersRepository);
    // VERIFICAR SE USUÁRIO EXISTE
    const userExists = await usersRepository.findOne({
      email
    });
    // SE NÃO EXISTIR, SALVAR NO DB
    if(userExists)
      return userExists

    const user = usersRepository.create({
      email
    })

    await usersRepository.save(user);
    // SE EXISTIR, RETORNAR USER

    return user;
  }
}
export { UsersService }