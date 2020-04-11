import axios from "axios";

const Users = () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
        return await axios.get(url);
    };

    const deleteData = async (id) => {
        const response = await axios.delete(`${url}/${id}`);
        response.data.id = id;
        console.log(response)
        return response;
    };

    return { fetchData, deleteData };
}

export default Users();