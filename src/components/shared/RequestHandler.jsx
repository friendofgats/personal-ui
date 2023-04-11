import axios from 'axios';
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:8000/info"

export default function RequestHandler(props = { section: "", verbosity: 0 }) {
    const [data, setData] = useState({});
    const { section, verbosity } = props;

    useEffect(() => {
        axios.get(BASE_URL, {
            params: {
                section: section,
                verbosity: verbosity
            }
        }
        ).then((resp) => {
            setData(resp.data)
        });
    }, []);
    return data;
}
