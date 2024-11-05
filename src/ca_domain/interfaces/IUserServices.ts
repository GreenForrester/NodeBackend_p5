import { User } from "../../ca_domain/entities/user";

export interface IUserService {

    getUserById(id: string): Promise<User|null>;
    getUserByUsername(username: string): Promise<User|null>; 
    getAllUsers(): Promise<User[]|null>; 

    updateUser(id: string, user: User): Promise<User|null>;
    deleteUser(id: string): Promise<User|null>;

}