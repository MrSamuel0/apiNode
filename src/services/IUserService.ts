import UserModel from "../models/UserModel";
import UserDto from "../dto/UserDto";

interface IUserService {
    addUser: (user: UserModel) => UserDto;
    getUser: (id: number) => UserDto;
    updateUser: (id: number, user: UserModel) => UserDto;
    deleteUser: (id: number) => void;
}

export default IUserService


