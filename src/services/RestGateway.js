import axios from "axios";

const RestGateway = (endPoint) => {
    const fetchData = () => axios.get(endPoint);

    const readData = async (id) => {
        const response = await axios.get(`${endPoint}/${id}`);
        return response;
    };

    const createData = async (body) => {
        const config = {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };
        const response = await axios.post(`${endPoint}`, JSON.stringify(body), config);
        return response;
    };

    const updateData = async (body) => {
        const {id} = body;
        const config = {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };
        const response = await axios.put(`${endPoint}/${id}`, JSON.stringify(body), config);
        return response;
    };

    const deleteData = async (id) => {
        const response = await axios.delete(`${endPoint}/${id}`);
        response.data.id = id;
        return response;
    };

    return { fetchData, createData, readData, updateData, deleteData };
};

export default RestGateway;