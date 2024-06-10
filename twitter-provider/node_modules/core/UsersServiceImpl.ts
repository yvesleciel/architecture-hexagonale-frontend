import {UsersService} from "./api/UsersService";
import {ManageUsers} from "./auth/ManageUsers";
import {Users} from "./Users";

export class UsersServiceImpl implements UsersService{
    private manageUsers: ManageUsers;
    constructor(manageUsers: ManageUsers) {
        this.manageUsers = manageUsers
    }

    loadUsersByUsername(username: string): Users {
        return this.manageUsers.getUsersFromProvider(username);
    }

}
