import {Users} from "../Users";

export interface UsersService{
    loadUsersByUsername(username: string): Users;
}
