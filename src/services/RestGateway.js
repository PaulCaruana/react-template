import axios from "axios";

const RestGateway = (endPoint) => {
    const fetchItem = () => axios.get(endPoint);

    const readItem = async (id) => {
        const response = await axios.get(`${endPoint}/${id}`);
        return response;
    };

    const createItem = async (body) => {
        const config = {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };
        const response = await axios.post(`${endPoint}`, JSON.stringify(body), config);
        return response;
    };

    const updateItem = async (body) => {
        const {id} = body;
        const config = {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };
        const response = await axios.put(`${endPoint}/${id}`, JSON.stringify(body), config);
        return response;
    };

    const deleteItem = async (id) => {
        const response = await axios.delete(`${endPoint}/${id}`);
        response.data.id = id;
        return response;
    };

    return { fetchItem, createItem, readItem, updateItem, deleteItem };
};

export default RestGateway;