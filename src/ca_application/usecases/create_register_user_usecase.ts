import { User } from '../../ca_domain/entities/user';
import { IUserRepository } from '../../ca_domain/interfaces/IUserRepository'
import { UserRepository } from '../../ca_infrastructure/database/repositories/userrepository';

export class RegisterUserUseCase 
{
    private  userRepository:IUserRepository;
    constructor() {this.userRepository = new UserRepository();}

    async execute(user: User): Promise<User|null> 
    {
        //not using to store password for Kong gateway anymore in v5 
        return await this.userRepository.create(user);
    }
}