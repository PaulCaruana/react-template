import RestService from "./RestService";
import userGateway from "../gateways/Users";

class UserService extends RestService {
    constructor(gateway) {
        super("users", gateway, {});
    }
}

const userService = new UserService(userGateway);
export const {useExecQuery, useQuery} = userService;
export default userService;
