import RestService from "../RestService";
import RestGateway from "../RestGateway";

class Service extends RestService {
    constructor(gateway) {
        super("users", gateway, {});
    }

    editSelected(id) {
        this.selectData(id, "edit");
        this.readData(id, "edit");
    }

    postUpdated() {
        console.log("refetch")
        this.refetch();
    }
}

const userGateway = RestGateway("http://localhost:5000/users");
const userService = new Service(userGateway);
export const {useService} = userService;
export default userService;
