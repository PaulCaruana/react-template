import axios from "axios";

const Users = () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
        return await axios.get(url);
    };

    const updateData = async (body) => {
        const id = body.id;
        const config ={
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };
        const response = await axios.put(`${url}/${id}`, JSON.stringify(body), config);
        return response;
    };

    const deleteData = async (id) => {
        const response = await axios.delete(`${url}/${id}`);
        response.data.id = id;
        return response;
    };

    return { fetchData, updateData, deleteData };
}

export default Users();