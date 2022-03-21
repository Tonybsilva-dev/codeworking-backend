import { hash } from 'bcrypt';
import { getRepository } from 'typeorm';
import AppError from '../../../../shared/http/errors/AppError';
import { User } from '../../../../shared/infra/database/typeorm/entities/User';
import { ICreateUserDTO } from './createUserDTO';


export class CreateUserUseCase {
  public async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const usersRepository = getRepository(User)

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already used.')
    }

    const hashedPassword = await hash(password, 8)

    const user = usersRepository.create({
      name: name.toUpperCase(),
      email: email.toLowerCase(),
      password: hashedPassword
    });

    await usersRepository.save(user)

    return user;
  }
}