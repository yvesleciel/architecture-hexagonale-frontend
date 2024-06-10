import {Users} from "../Users";

export interface ManageUsers{
    getUsersFromProvider(username: string): Users;
}
