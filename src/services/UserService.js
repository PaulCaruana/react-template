import RestService from "./RestService";
import RestGateway from "../gateways/Rest";

class UserService extends RestService {
    constructor(gateway) {
        super("users", gateway, {});
    }

    useService(options) {
        const event = this.event;
        const editSelected = this.editSelected.bind(this);
        const postDirty = this.postDirty.bind(this);
        this.eventEmitter.on(event.isDirty, postDirty);
        const service = super.useService(options);
        return {...service, editSelected};
    }

    editSelected(id) {
        this.selectData(id);
        //this.readData(id);
        this.setEditMode(true);
    }

    postDirty() {
        super.setEditMode(false);
    }
}

const userGateway = RestGateway("http://localhost:5000/users");
const userService = new UserService(userGateway);
export const {useService} = userService;
export default userService;
