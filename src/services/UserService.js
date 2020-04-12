import RestService from "./RestService";
import userGateway from "../gateways/Users";

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

    editSelected(payload) {
        this.selectData(payload);
        this.setEditMode(true);
    }

    postDirty() {
        super.setEditMode(false);
    }
}

const userService = new UserService(userGateway);
export const {useService} = userService;
export default userService;
