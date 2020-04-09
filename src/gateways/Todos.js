import axios from "axios";

function Todos() {
    const url = "https://todo-backend-golang-goa.herokuapp.com/todos";

    const fetch = async () => {
        return await axios.get(url);
    };

    return { fetch };
}

export default Todos();