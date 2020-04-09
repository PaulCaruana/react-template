import axios from "axios";

const Users = () => {
    const url = "https://jsonplaceholder.typicode.com/users/";

    const fetch = async () => {
        return await axios.get(url);
    };

    return { fetch };
}

export default Users();