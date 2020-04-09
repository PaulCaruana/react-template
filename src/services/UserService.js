import RestService from "./RestService";
import userGateway from "../gateways/Users";

class UserService extends RestService {
    constructor(gateway) {
        super("users", gateway, {});
    }
}

const userService = new UserService(userGateway);
export const {useExecQuery, useQuery} = userService;
const fred = {
    a:0,
    b:1
}
export { fred };
export default userService;
