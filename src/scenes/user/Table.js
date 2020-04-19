import React, {useState} from 'react';
import DataTable from "react-data-table-component";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Delete from "@material-ui/icons/Delete";
import Add from "@material-ui/icons/Add";
import memoize from "memoize-one";


const UserTable = ({users, addUser, editUser, deleteUser}) => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [toggleCleared, setToggleCleared] = useState(false);

    if (!users) return null;
    const columns = [
        {
            name: "Name",
            selector: "name",
            sortable: true,
        },
        {
            name: "User name",
            selector: "username",
            sortable: true,
        },
    ];

    const handleChange = state => {
        setSelectedUsers(state.selectedRows);
    };

    const actions = (
        <IconButton
            color="primary"
            onClick={addUser}
        >
            <Add/>
        </IconButton>
    );

    const contextActions = memoize(deleteHandler => (
        <IconButton
            color="secondary"
            onClick={deleteHandler}
        >
            <Delete/>
        </IconButton>
    ));

    const deleteAll = () => {
        const ids = selectedUsers.map(selectedUser => selectedUser.id);
        deleteUser(ids);
        setToggleCleared(true);
    };

    const handleRowClicked = user => {
        editUser(user.id);
    };

    return (
        <DataTable
            title="Users"
            columns={columns}
            data={users}
            defaultSortField="name"
            actions={actions}
            selectableRows
            onSelectedRowsChange={handleChange}
            contextActions={contextActions(deleteAll)}
            highlightOnHover
            pointerOnHover={true}
            clearSelectedRows={toggleCleared}
            onRowClicked={handleRowClicked}
        />
    );
};

export default UserTable;
