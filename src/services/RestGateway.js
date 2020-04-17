import axios from "axios";

const RestGateway = (endPoint) => {
    const fetchItem = async () => {
        const response = await axios.get(endPoint);
        return response;
    };

    const readItem = async (id) => {
        const response = await axios.get(`${endPoint}/${id}`);
        return response;
    };

    const createItem = async (options) => {
        const {data} = options;
        const config = {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };
        const response = await axios.post(`${endPoint}`, JSON.stringify(data), config);
        return response;
    };

    const updateItem = async (options) => {
        const {id, data} = options;
        const config = {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };
        const response = await axios.put(`${endPoint}/${id}`, JSON.stringify(data), config);
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
