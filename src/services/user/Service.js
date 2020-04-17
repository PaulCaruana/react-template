import RestService from "../RestService";
import RestGateway from "../RestGateway";
import {modeType} from "../RestReducer";

class Service extends RestService {
    constructor(gateway) {
        super("users", gateway, {});
    }

    selectEdit(id) {
        this.readItem(id, modeType.edit);
    }

    postUpdated() {
        this.refetch();
    }
}

const userGateway = RestGateway(`${process.env.REACT_APP_SERVER_ENDPOINT}/users`);
const {useService} = new Service(userGateway);
export default useService;
