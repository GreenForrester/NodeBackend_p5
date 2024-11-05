import { User }                     from '../../ca_domain/entities/user';
import { IUserService }             from '../../ca_domain/interfaces/IUserServices';
import { GetUserByIdUseCase }       from '../usecases/get_userbyid_usecase';
import { GetUserByNameUseCase }     from '../usecases/get_userbyname_usecase';
import { RegisterUserUseCase }      from '../usecases/create_register_user_usecase';
import { UpdateUserUseCase }        from '../usecases/update_user_usecase';
import { DeleteUserUseCase }        from '../usecases/delete_user_usecase';
import { GetAllUserUsecase }        from '../usecases/get_all_users_usecase';


export class UserService implements IUserService
{
    private getUserByIdUseCase:     GetUserByIdUseCase;
    private getUserByNameUseCase:   GetUserByNameUseCase;
    private getAllUsersUseCase:     GetAllUserUsecase;
    private registerUserUseCase:    RegisterUserUseCase;
    private updateUserUseCase:      UpdateUserUseCase;
    private deleteUserUseCase:      DeleteUserUseCase;


    constructor() 
    {
        this.getUserByIdUseCase     =    new  GetUserByIdUseCase();
        this.getUserByNameUseCase   =    new  GetUserByNameUseCase();
        this.registerUserUseCase    =    new  RegisterUserUseCase();
        this.updateUserUseCase      =    new  UpdateUserUseCase();
        this.deleteUserUseCase      =    new  DeleteUserUseCase();
        this.getAllUsersUseCase     =    new  GetAllUserUsecase();  
    }


    async getUserById(id: string): Promise<User|null> 
    {
        return await this.getUserByIdUseCase.execute(id);
    }

    async getUserByUsername(name: string): Promise<User|null> 
    {
        console.log("getUserByUsername called");
        return await this.getUserByNameUseCase.execute(name);
    }

    async getAllUsers(): Promise<User[]|null> 
    {
        return await this.getAllUsersUseCase.execute();
    }

    async updateUser(id: string, user: User): Promise<User|null> 
    {
        return await this.updateUserUseCase.execute(id, user );
    }

    async deleteUser(id: string): Promise<User|null> 
    {
        return await this.deleteUserUseCase.execute(id);
    }

    async register(user: User): Promise<User|null>
    {
        console.log("register called");
        return await this.registerUserUseCase.execute(user);
    }       

}