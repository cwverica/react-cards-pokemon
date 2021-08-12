import { useState } from 'react';
import uuid from "uuid";
import axios from "axios";

function useAxios(baseUrl) {

    const [data, setData] = useState([]);

    const addDatum = async (instance = null) => {
        const url = instance ? baseUrl + instance : baseUrl;
        const response = await axios.get(url);
        setData(data => [...data, { ...response.data, id: uuid() }]);
    };

    const clearData = () => {
        setData([]);
    }

    return [data, addDatum, clearData];
}

export default useAxios;