import RestService from "../RestService";
import RestGateway from "../RestGateway";

class Service extends RestService {
    constructor(gateway) {
        super("users", gateway, {});
    }

    selectEdit(id) {
        this.selectItem(id, "edit");
        this.readItem(id, "edit");
    }

    postUpdated() {
        this.refetch();
    }
}

const userGateway = RestGateway(`${process.env.REACT_APP_SERVER_ENDPOINT}/users`);
const {useService} = new Service(userGateway);
export default useService;
