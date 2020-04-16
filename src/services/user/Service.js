import RestService from "../RestService";
import RestGateway from "../RestGateway";

class Service extends RestService {
    constructor(gateway) {
        super("users", gateway, {});
    }

/*
    useService(options) {
        const params = super.useService(options);
        const {data, selected, editSelected, createData, readData, updateData, deleteData} = params;
        return {
            ...params,
            users: data,
            userSelected: selected,
            editableUser: editSelected,
            createUser: createData,
            readUser: readData,
            updateUser: updateData,
            deleteUser: deleteData,
        };
    }
*/

    editSelected(id) {
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
